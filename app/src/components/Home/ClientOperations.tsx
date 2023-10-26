import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Results } from "./Results/Results";
import { Filters } from "./Filters/Filters";
import { CreateOperationsDialogue } from "./CreateOperationsDialogue";
import { useSearchParams } from "react-router-dom";
import { Operation } from "../../../../common/types";
import * as operationsService from "../../services/operationsService";

function decodeMultstoreQueryParam(multistore: string | null): boolean | null {
  if (multistore === "true") {
    return true;
  } else if (multistore === "false") {
    return false;
  } else {
    return null;
  }
}

function prepareSearchParams(
  clients: string[],
  retailers: string[],
  operationTypes: string[],
  multistore: boolean | null
): any {
  {
    return multistore === null
      ? {
          operationType: operationTypes,
          retailer: retailers,
          client: clients,
        }
      : {
          operationType: operationTypes,
          retailer: retailers,
          client: clients,
          multistore: multistore.toString(),
        };
  }
}

export function ClientOperations() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [operations, setOperations] = useState<Operation[]>([]);
  const [count, setCount] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const clients = searchParams.getAll("client") || ([] as string[]);
  const retailers = searchParams.getAll("retailer") || ([] as string[]);
  const operationTypes = searchParams.getAll("operationType") || ([] as string[]);
  const multistore = decodeMultstoreQueryParam(searchParams.get("multistore"));

  useEffect(() => {
    setPage(0);
    refreshOperations();
  }, [searchParams.toString()]);

  useEffect(() => {
    refreshOperations();
  }, [rowsPerPage, page]);

  const refreshOperations = async () => {
    const { operations, count } = await operationsService.fetchOperations({
      operationTypes,
      retailers,
      clients,
      multistore,
      rowsPerPage,
      page,
    });
    setOperations(operations);
    setCount(count);
  };

  function handleFilter(
    clients: string[],
    retailers: string[],
    operationTypes: string[],
    multistore: boolean | null
  ) {
    const searchParams = prepareSearchParams(clients, retailers, operationTypes, multistore);
    setSearchParams(searchParams);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          padding: 2,
          borderRight: 0,
          borderColor: "#e0e0e0",
          height: "calc(100vh - 64px)",
          width: 350,
          boxShadow: 3,
        }}
      >
        <Filters
          selectedClients={clients}
          selectedOperationTypes={operationTypes}
          selectedRetailers={retailers}
          selectedMultistore={multistore}
          onFilter={handleFilter}
        />
      </Box>
      <Box
        sx={{
          paddingTop: 2,
          paddingLeft: 3,
          paddingRight: 3,
          flexGrow: 1,
        }}
      >
        <Results
          onCreateClick={() => setShowModal(true)}
          operations={operations}
          count={count}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </Box>
      {showModal && (
        <CreateOperationsDialogue
          open={showModal}
          onCreated={() => refreshOperations()}
          onClose={() => setShowModal(false)}
          defaultClient={clients[0] || ""}
          defaultRetailer={retailers[0] || ""}
          defaultOperationType={operationTypes[0] || ""}
          defaultMultistore={searchParams.get("multistore") === "true"}
        />
      )}
    </Box>
  );
}
