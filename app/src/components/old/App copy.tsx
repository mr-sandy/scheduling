import { Box, CssBaseline } from "@mui/material";
import { BomList } from "../BomList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navbar } from "../Navbar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";
import { BomListProvider } from "../BomListProvider";
import {
  CreateBom,
  Summary,
  Retailers,
  Apps,
  Fundamentals,
  Scorecards,
  PublicationService,
  Review,
  GatherRequirements,
  OtherRequirements,
} from "../CreateBom";
import { BomProvider } from "../BomProvider";
import { RetailerListProvider } from "../RetailerListProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RetailerListProvider>
        <BomListProvider>
          <BomProvider>
            <Router>
              <Box>
                <CssBaseline />
                <Navbar />
                <Routes>
                  <Route index element={<Navigate to="/boms" />} />
                  <Route path="boms" element={<BomList />} />
                  <Route path="boms/create" element={<CreateBom />}>
                    <Route index element={<Navigate to="summary" />} />
                    <Route path="summary" element={<Summary />} />
                    <Route path="retailers" element={<Retailers />} />
                    <Route path="apps" element={<Apps />} />
                    <Route path="fundamentals" element={<Fundamentals />} />
                    <Route path="scorecards" element={<Scorecards />} />
                    <Route
                      path="publication-service"
                      element={<PublicationService />}
                    />
                    <Route
                      path="other-requirements"
                      element={<OtherRequirements />}
                    />
                    <Route
                      path="gather-requirements"
                      element={<GatherRequirements />}
                    />
                    <Route path="review" element={<Review />} />
                  </Route>
                </Routes>
              </Box>
            </Router>
          </BomProvider>
        </BomListProvider>
      </RetailerListProvider>
    </ThemeProvider>
  );
}
export default App;
