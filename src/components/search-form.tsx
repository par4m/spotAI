import React from "react";
import { Input } from "./ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Label } from "./ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";

const FormSchema = z.object({
  arrivingon: z.string({
    required_error: "Date is required",
  }),
  arrivingtime: z.string({
    required_error: "Time is required",
  }),
  leavingtime: z.string({
    required_error: "Time is required",
  }),
});

function SearchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      arrivingon: "",
      arrivingtime: "",
      leavingtime: "",
    },
  });

  function onSubmit(formData: z.infer<typeof FormSchema>) {
    console.log(formData);
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Address Input */}
      <div className="flex-1">
        <Label
          htmlFor="parkingat"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </Label>
        <Input
          id="parkingat"
          placeholder="Enter your address"
          className="mt-1 w-full"
        />
      </div>

      {/* Form Fields */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {/* Arriving On */}
          <FormField
            control={form.control}
            name="arrivingon"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">
                  Arriving on
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Select date"
                    className="mt-1 w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Arriving Time */}
          <FormField
            control={form.control}
            name="arrivingtime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">
                  Arriving time
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Start time"
                    className="mt-1 w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Leaving Time */}
          <FormField
            control={form.control}
            name="leavingtime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">
                  Leaving time
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="End time"
                    className="mt-1 w-full"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="lg:col-span-3 flex justify-end">
            <Button type="submit" className="w-full lg:w-auto">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default SearchForm;
