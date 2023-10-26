import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { StartStage, SetSearchTermsStage, SetCategoriesStage, ConfirmStage } from "./stages";
import * as operationsService from "../../../services/operationsService";
import { generateOperations } from "./generateOperations";

enum Stages {
  Start = 0,
  SetParams,
  Confirm,
  Complete,
}

export function CreateOperationsDialogue({
  open,
  onClose,
  onCreated,
  defaultClient = "",
  defaultRetailer = "",
  defaultOperationType = "",
  defaultMultistore = false,
}: {
  open: boolean;
  onClose: () => void;
  onCreated: () => void;
  defaultClient?: string;
  defaultRetailer?: string;
  defaultOperationType?: string;
  defaultMultistore?: boolean;
}) {
  const [stage, setStage] = useState<Stages>(Stages.Start);
  const [client, setClient] = useState<string>(defaultClient);
  const [retailer, setRetailer] = useState<string>(defaultRetailer);
  const [operationType, setOperationType] = useState<string>(defaultOperationType);
  const [multistore, setMultistore] = useState<boolean>(defaultMultistore);
  const [schedule, setSchedule] = useState<string>("daily");
  const [searchTerms, setSearchTerms] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [productIds, setProductIds] = useState<string[]>([]);
  const [success, setSuccess] = useState<boolean | null>(null);

  const operations = generateOperations(
    client,
    retailer,
    operationType,
    schedule,
    searchTerms,
    categories,
    productIds,
    multistore
  );

  function handleNextPage() {
    setStage(stage + 1);
  }

  function handlePreviousPage() {
    setStage(stage - 1);
  }

  async function handleSave() {
    const success = await operationsService.createOperations(operations);
    setSuccess(success);
    setStage(Stages.Complete);
    if (success) {
      onCreated();
    }
  }

  function canProceed() {
    switch (stage) {
      case Stages.Start:
        return client !== "" && retailer !== "" && operationType !== "" && schedule !== "";
      case Stages.SetParams:
        switch (operationType) {
          case "search":
            return searchTerms.length > 0;
          case "category":
            return categories.length > 0;
          case "detail":
            return productIds.length > 0;
          default:
            return false;
        }
      case Stages.Confirm:
        return true;
      default:
        return false;
    }
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="md">
      <DialogTitle sx={{ boxShadow: 2, zIndex: 1 }}>Create Operations</DialogTitle>
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
            multistore={multistore}
            setMultistore={setMultistore}
          />
        )}
        {stage === Stages.SetParams && operationType === "search" && (
          <SetSearchTermsStage searchTerms={searchTerms} setSearchTerms={setSearchTerms} />
        )}
        {stage === Stages.SetParams && operationType === "category" && (
          <SetCategoriesStage categories={categories} setCategories={setCategories} />
        )}
        {(stage === Stages.Confirm || stage === Stages.Complete) && (
          <ConfirmStage operations={operations} success={success} />
        )}
      </DialogContent>
      <DialogActions sx={{ padding: 3, borderTop: 1, borderColor: "divider", boxShadow: 3 }}>
        {stage === Stages.Start && <Button onClick={onClose}>Cancel</Button>}
        {stage !== Stages.Start && stage !== Stages.Complete && (
          <Button onClick={handlePreviousPage}>Back</Button>
        )}
        {stage < Stages.Confirm && (
          <Button onClick={handleNextPage} variant="outlined" disabled={!canProceed()}>
            Next
          </Button>
        )}
        {stage === Stages.Confirm && (
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        )}
        {stage === Stages.Complete && (
          <Button onClick={onClose} variant="outlined">
            Close
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
