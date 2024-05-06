import { Box } from "@mui/material";
import CustomNumberInput from "../../../../../components/Inputs/NumberInput";
import CustomDropdown from "../../../../../components/Inputs/dropDown";
import CommonInputField from "../../../../../components/Inputs/InputFeild";
import CommercialForm from "../commercial";

const Buy_Rent = ({ subCategoryName }) => {
    return (
        <>
            {subCategoryName == 'COMMERCIAL' ?
                <CommercialForm />
                :
                <div>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="stretch"
                  mb={2}
                  mt={2}
                  sx={{ gap: 2 }}
                >
                  <CustomDropdown label="Property Type" options={[1, 2, 3, 4]} />
                  <CustomNumberInput aria-label="Demo number input" placeholder="" label="Bedroom" />
                  <CustomNumberInput aria-label="Demo number input" placeholder="" label="Bathroom" />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="stretch"
                  mb={2}
                  sx={{ gap: 2 }}
                >
                  <CustomDropdown label="Construction Status" options={['Manual', 'Automatic']} />
                  <CustomDropdown label="Furnishing" options={[1, 2, 3, 4]} />
                  <CustomDropdown label="Listed by" options={[1, 2, 3, 4]} />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="stretch"
                  mb={2}
                  sx={{ gap: 2 }}
                >
                  <CustomNumberInput aria-label="Demo number input" placeholder="" label="Super Built Up Area (ft²)" />
                  <CustomNumberInput aria-label="Demo number input" placeholder="" label="Carpet Area (ft²)*" />
                  <CustomNumberInput aria-label="Demo number input" placeholder="" label="Maintenance (Monthly)" />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="stretch"
                  mb={2}
                  sx={{ gap: 2 }}
                >
                  <CommonInputField label="Total Floors" multiline={false} required />
                  <CustomNumberInput aria-label="Demo number input" placeholder="" label="Floor No" />
                  <CustomNumberInput aria-label="Demo number input" placeholder="" label="No. of Car Parking" />
                </Box>
                <CustomDropdown label="Facing Direction*" options={[1, 2, 3, 4]} />
              </div>
            }
        </>


    )
}

export default Buy_Rent;