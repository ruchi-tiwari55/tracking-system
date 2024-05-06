import { Box } from "@mui/material";
import CustomDropdown from "../../../../components/Inputs/dropDown";
import CustomNumberInput from "../../../../components/Inputs/NumberInput";
import CommonInputField from "../../../../components/Inputs/InputFeild";
import RoundedCheckbox from "../../../../components/Inputs/checkbox";

const CommercialForm = ({ subCategoryName }) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        mb={2}
        mt={2}
        sx={{ gap: 2 }}
      >
        <RoundedCheckbox label={'Lease'} />
        <RoundedCheckbox label={'Sell'} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        mb={2}
        mt={2}
        sx={{ gap: 2 }}
      >
        <CustomDropdown label="Commercial Type*" options={[1, 2, 3, 4]} />
        <CustomNumberInput
          aria-label="Demo number input"
          placeholder=""
          label="Cabins"
        />
        <CustomNumberInput
          aria-label="Demo number input"
          placeholder=""
          label="Bathroom"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        mb={2}
        sx={{ gap: 2 }}
      >
        <CustomDropdown
          label="Construction Status"
          options={['Manual', 'Automatic']}
        />
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
        <CustomNumberInput
          aria-label="Demo number input"
          placeholder=""
          label="Super Built Up Area (ft²)"
        />
        <CustomNumberInput
          aria-label="Demo number input"
          placeholder=""
          label="Carpet Area (ft²)*"
        />
        <CustomNumberInput
          aria-label="Demo number input"
          placeholder=""
          label="Maintenance (Monthly)"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        mb={2}
        sx={{ gap: 2 }}
      >
        <CommonInputField label="Total Floors" multiline={false} required />
        <CustomNumberInput
          aria-label="Demo number input"
          placeholder=""
          label="Floor No"
        />
        <CustomNumberInput
          aria-label="Demo number input"
          placeholder=""
          label="No. of Car Parking"
        />
      </Box>
      <CustomDropdown
        label="Facing Direction*"
        options={[1, 2, 3, 4]}
      />
    </>
  );
};

export default CommercialForm;
