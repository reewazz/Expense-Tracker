import React from "react";
import { Button, TextInput, Paper, Title, Text, Image } from "@mantine/core";
import { Button as MuiButton } from "@mui/material";

export const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-4xl w-full grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="LogoShort.png"
            alt="Expense Tracker Graphic"
            width={400}
          />
        </div>
        <Paper
          padding="xl"
          shadow="xs"
          radius="md"
          withBorder
          className="flex flex-col justify-center"
        >
          <div className="flex justify-center mb-6">
            <Image src="LogoShort.png" alt="Expense Tracker Logo" width={120} />
          </div>
          <Title order={2} className="mb-4 text-center">
            Create an account
          </Title>

          <form className="space-y-4">
            <TextInput label="Email" placeholder="Enter your email" required />
            <TextInput
              label="Password"
              placeholder="Enter your password"
              required
              type="password"
            />
            <Button fullWidth mt="xl">
              Sign up
            </Button>

            <Text align="center" size="sm" className="my-4">
              or
            </Text>

            <div className="flex flex-col space-y-2">
              <MuiButton variant="contained" color="primary" fullWidth>
                Sign up with Google
              </MuiButton>
              <MuiButton variant="contained" color="secondary" fullWidth>
                Sign up with Facebook
              </MuiButton>
            </div>
          </form>
        </Paper>
      </div>
    </div>
  );
};
