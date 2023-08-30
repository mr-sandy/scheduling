import {
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useBom, useBomDispatch } from "../BomProvider";
import { setProperty } from "../../state/bom/bomActions";

export function Fundamentals() {
  const bom = useBom();
  const dispatch = useBomDispatch();

  return (
    <Box p={2}>
      <Typography mb={3} variant="h5">
        Fundamentals
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.fundamentals?.fixTheBasics || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    fundamentals: {
                      ...bom?.fundamentals,
                      fixTheBasics: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Fix The Basics (content)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.fundamentals?.sellTheBenefits || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    fundamentals: {
                      ...bom?.fundamentals,
                      sellTheBenefits: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Sell The Benefits (content)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.fundamentals?.easyToBuy || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    fundamentals: {
                      ...bom?.fundamentals,
                      easyToBuy: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Easy To Buy (Search)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.fundamentals?.smartPricingAndPromo || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    fundamentals: {
                      ...bom?.fundamentals,
                      smartPricingAndPromo: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Smart Pricing & Promo (Price alerts)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.fundamentals?.winningCampaigns || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    fundamentals: {
                      ...bom?.fundamentals,
                      winningCampaigns: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Winning Campaigns (promo)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.fundamentals?.deliverValueThatCounts || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    fundamentals: {
                      ...bom?.fundamentals,
                      deliverValueThatCounts: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Deliver value That Counts (availability & assortment)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.fundamentals?.listenToTheShoppersVoice || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    fundamentals: {
                      ...bom?.fundamentals,
                      listenToTheShoppersVoice: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Listen to the Shoppers Voice (Ratings & reviews)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={bom?.fundamentals?.excuteYourCategoryVision || false}
              onChange={(e) => {
                dispatch(
                  setProperty({
                    fundamentals: {
                      ...bom?.fundamentals,
                      excuteYourCategoryVision: e.target.checked,
                    },
                  })
                );
              }}
            />
          }
          label="Excute Your category Vision"
        />
      </FormGroup>
    </Box>
  );
}
