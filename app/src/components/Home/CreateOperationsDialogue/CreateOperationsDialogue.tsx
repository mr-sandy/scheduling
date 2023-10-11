import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import {
  StartStage,
  SetSearchTermsStage,
  SetCategoriesStage,
  ConfirmStage,
} from "./stages";
import { Operation } from "../../../../../common/types";

enum Stages {
  Start = 0,
  SetParams,
  Confirm,
  Review,
}

function generateOperations(
  client: string,
  retailer: string,
  operationType: string,
  schedule: string,
  searchTerms: string[] = [],
  categories: string[] = [],
  productIds: string[] = []
): Operation[] {
  switch (operationType) {
    case "search":
      return searchTerms.map((searchTerm) => ({
        client,
        retailer,
        operationType,
        schedule,
        searchTerm,
      })) as Operation[];

    case "category":
      return (
        categories?.length === 0
          ? ["category 1", "category 2", "category 3"]
          : categories
      ).map((category) => ({
        client,
        retailer,
        operationType,
        schedule,
        category,
      })) as Operation[];

    case "detail":
      return productIds.map((productId) => ({
        client,
        retailer,
        operationType,
        schedule,
        productId,
      })) as Operation[];

    default:
      return [] as Operation[];
  }
}

export function CreateOperationsDialogue({
  open,
  handleClose,
  defaultClient,
  defaultRetailer,
  defaultOperationType,
}: {
  open: boolean;
  handleClose: () => void;
  defaultClient?: string;
  defaultRetailer?: string;
  defaultOperationType?: string;
}) {
  const [stage, setStage] = useState<Stages>(Stages.Start);
  const [client, setClient] = useState<string>(defaultClient || "");
  const [retailer, setRetailer] = useState<string>(defaultRetailer || "");
  const [operationType, setOperationType] = useState<string>(
    defaultOperationType || ""
  );
  const [schedule, setSchedule] = useState<string>("daily");
  const [searchTerms, setSearchTerms] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [productIds, setProductIds] = useState<string[]>([]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
      <DialogTitle sx={{ boxShadow: 2, zIndex: 1 }}>
        Create Operations
      </DialogTitle>
      <DialogContent sx={{ minHeight: 400, height: "75vh" }}>
        {stage === Stages.Start && (
          <StartStage
            client={client}
            setClient={setClient}
            retailer={retailer}
            setRetailer={setRetailer}
            operationType={operationType}
            setOperationType={setOperationType}
            schedule={schedule}
            setSchedule={setSchedule}
          />
        )}
        {stage === Stages.SetParams && operationType === "search" && (
          <SetSearchTermsStage
            searchTerms={searchTerms}
            setSearchTerms={setSearchTerms}
          />
        )}
        {stage === Stages.SetParams && operationType === "category" && (
          <SetCategoriesStage
            categories={categories}
            setCategories={setCategories}
          />
        )}
        {stage === Stages.Confirm && (
          <ConfirmStage
            operations={generateOperations(
              client,
              retailer,
              operationType,
              schedule,
              searchTerms,
              categories,
              productIds
            )}
          />
        )}
      </DialogContent>
      <DialogActions
        sx={{ padding: 3, borderTop: 1, borderColor: "divider", boxShadow: 3 }}
      >
        {stage === Stages.Start && (
          <Button onClick={handleClose}>Cancel</Button>
        )}
        {stage !== Stages.Start && stage !== Stages.Review && (
          <Button onClick={() => setStage(stage - 1)}>Back</Button>
        )}
        {stage < Stages.Confirm && (
          <Button
            onClick={() => {
              setStage(stage + 1);
            }}
            variant="outlined"
          >
            Next
          </Button>
        )}
        {stage === Stages.Confirm && (
          <Button
            onClick={() => {
              setStage(stage + 1);
            }}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        )}
        {stage === Stages.Review && (
          <Button onClick={handleClose} variant="outlined">
            Close
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
