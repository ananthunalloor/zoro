import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5 example
        </Typography>
        <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
          Count is: {count}
        </Button>
      </Box>
    </Container>
  );
}

export default App;
