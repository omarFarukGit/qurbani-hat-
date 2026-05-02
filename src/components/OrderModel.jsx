"use client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { BiEdit, BiUser } from "react-icons/bi";
import { toast } from "react-toastify";

export function OrderModel() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;

    toast.success("order placed succesfully");

    router.push("/");
  };
  return (
    <Modal>
      <Button variant="secondary " className={" w-full"}>
        Book Now
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Booking Informations</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    isRequired
                    className="w-full"
                    name="name"
                    type="text"
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                      if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                      ) {
                        return "Please enter a valid email address";
                      }

                      return null;
                    }}
                    className="w-full"
                  >
                    <Label>Emails</Label>
                    <Input placeholder="Enter your Email" />
                  </TextField>
                  <TextField
                    isRequired
                    className="w-full"
                    name="address"
                    type="text"
                  >
                    <Label>Address</Label>
                    <Input placeholder="Enter your address" />
                  </TextField>
                  <TextField
                    isRequired
                    className="w-full"
                    name="phone"
                    type="number"
                  >
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit">Save</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
