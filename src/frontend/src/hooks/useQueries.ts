import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      await actor.submitContact(name, email, message);
    },
  });
}

export function useSubmitSuggestion() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      appIdea,
    }: {
      name: string;
      email: string;
      appIdea: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      await actor.submitSuggestion(name, email, appIdea);
    },
  });
}
