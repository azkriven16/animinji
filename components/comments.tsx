"use client";

import { SignInButton, useUser } from "@clerk/nextjs";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { usePathname, useSearchParams } from "next/navigation";
import { trpc } from "@/app/_trpc/client";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MoreVerticalIcon, TrashIcon } from "lucide-react";

export default function Comments() {
  const { user } = useUser();
  const searchParams = useSearchParams();
  const anime = searchParams.get("anime") || "";

  const { data: allComments } = trpc.getAllComments.useQuery({
    animeId: anime,
  });
  console.log(allComments);

  return (
    <div className="mb-10">
      {user ? <AddComment anime={anime} /> : <NotAuthed />}
      {allComments?.map((comment) => (
        <div
          key={comment.id}
          className="flex items-center my-10 gap-2 w-full group"
        >
          <Image
            src={comment.userImg}
            alt="User Avatar"
            height={35}
            width={35}
            className="rounded-full object-cover"
          />

          <div className="flex-1">
            <p className="space-x-1.5">
              @{comment.userName}
              <span className="text-xs text-muted-foreground ml-1">
                {format(new Date(comment.createdAt), "MMM d, yyy")}
              </span>
            </p>
            <p className="pt-1">{comment.comment}</p>
          </div>

          {user?.id === comment.userId && (
            <DropdownMenu>
              <DropdownMenuTrigger className="opacity-0 group-hover:opacity-100">
                <MoreVerticalIcon size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem
                  role="button"
                  // onClick={() =>
                  //   deleteComment({
                  //     episodeId: episode,
                  //     comment: comment.comment,
                  //   })
                  // }
                >
                  <TrashIcon className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      ))}
    </div>
  );
}

const NotAuthed = () => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const anime = searchParams.get("anime") || "";
  const episode = searchParams.get("episode") || "";

  const handleClick = () => {
    toast.error("You must be logged in to comment.");
  };
  return (
    <div className="my-5 flex items-center gap-2 md:gap-5">
      <Input placeholder="You must be logged in to comment..." />
      <SignInButton
        afterSignInUrl={`${path}${anime && `?anime=${anime}`}${
          episode && `&episode=${episode}`
        }`}
        afterSignUpUrl={`${path}${anime && `?anime=${anime}`}${
          episode && `&episode=${episode}`
        }`}
        mode="modal"
      >
        <Button onClick={handleClick}>Submit</Button>
      </SignInButton>
    </div>
  );
};

function AddComment({ anime }: { anime: string }) {
  const FormSchema = z.object({
    comment: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      comment: "",
    },
  });
  const utils = trpc.useContext();

  const { mutate: addComment } = trpc.addComment.useMutation({
    onSuccess: () => {
      utils.getAllComments.invalidate();
      toast.success("Comment added.");
    },
    onMutate: () => {
      utils.getAllComments.invalidate();
      toast.loading("Loading...");
    },
    onSettled: () => {
      utils.getAllComments.invalidate();
      toast.dismiss();
    },
    onError: (error) => {
      utils.getAllComments.invalidate();
      toast.error(`${error.message}`);
    },
  });

  const { user } = useUser();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    addComment({
      comment: data.comment,
      animeId: anime,
      userImg: user?.imageUrl!,
      userName: user?.fullName!,
      userId: user?.id!,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <div className="flex space-x-1.5">
                <FormControl>
                  <Input placeholder="Add a comment." {...field} />
                </FormControl>
                <Button type="submit">Submit</Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
