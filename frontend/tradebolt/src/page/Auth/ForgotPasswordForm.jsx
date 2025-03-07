// import { Button } from "@/components/ui/button";
// import { DialogClose } from "@/components/ui/dialog";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import React from "react";
// import { useForm } from "react-hook-form";

// const ForgotPasswordForm = () => {
//   const form = useForm({
//     resolver: "",
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   return (
//     <div>
//         <h1 className="text-xl font-bold text-center pb-3">Forgot Password</h1>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input
//                     className="border w-full border-gray-700 p-5"
//                     placeholder="Enter your email"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//             <Button type="submit" className="w-full py-5">
//               Submit
//             </Button>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default ForgotPasswordForm;




import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";

const ForgotPasswordForm = () => {
  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [userId, setUserId] = useState(null);

  const form = useForm({
    defaultValues: {
      email: "",
      otp: "",
      password: "",
    },
  });

  const onSubmitStep1 = async (data) => {
    try {
      const response = await axios.post("http://localhost:5454/auth/forgot-password/request", data);
      setOtpSent(true);
      setUserId(response.data.userId);
      setStep(2);
    } catch (error) {
      console.error("Error requesting password reset:", error);
    }
  };
  

  const onSubmitStep2 = async (data) => {
    try {
      await axios.post("/auth/forgot-password/verify", { ...data, userId });
      setStep(3);
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const onSubmitStep3 = async (data) => {
    try {
      await axios.post("/auth/forgot-password/reset", { ...data, userId });
      alert("Password reset successfully!");
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-center pb-3">Forgot Password</h1>
      <Form {...form}>
        {step === 1 && (
          <form onSubmit={form.handleSubmit(onSubmitStep1)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="border w-full border-gray-700 p-5"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full py-5">
              Request OTP
            </Button>
          </form>
        )}
        {step === 2 && otpSent && (
          <form onSubmit={form.handleSubmit(onSubmitStep2)} className="space-y-6">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OTP</FormLabel>
                  <FormControl>
                    <Input
                      className="border w-full border-gray-700 p-5"
                      placeholder="Enter OTP"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full py-5">
              Verify OTP
            </Button>
          </form>
        )}
        {step === 3 && (
          <form onSubmit={form.handleSubmit(onSubmitStep3)} className="space-y-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      className="border w-full border-gray-700 p-5"
                      placeholder="Enter new password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full py-5">
              Reset Password
            </Button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
