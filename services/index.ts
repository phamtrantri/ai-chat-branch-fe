export const getAllConversations = async () => {
  const res = await fetch("http://localhost:8000/conversations/v1/getAll", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return await data.data.conversations;
};

export const getConversationDetails = async (id: number) => {
  const res = await fetch("http://localhost:8000/conversations/v1/getDetails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });

  const data = await res.json();

  return await data.data.messages;
};

export const createStreamedMessage = async (
  conversation_id: number,
  user_message: string,
  is_new_conversation = false
) => {
  const res = await fetch("http://localhost:8000/messages/v1/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      conversation_id,
      user_message,
      is_new_conversation,
    }),
  });

  return res;
};
