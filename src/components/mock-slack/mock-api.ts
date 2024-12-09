export const channelList = [
    {
      id: 1,
      name: "general",
      type: "public",
      description: "Company-wide announcements and discussions",
      members: ["john.doe", "jane.doe", "bob.smith"],
    },
    {
      id: 2,
      name: "random",
      type: "public",
      description: "Non-work-related conversations",
      members: ["john.doe", "jane.doe", "alice.johnson"],
    },
    {
      id: 3,
      name: "dev-team",
      type: "private",
      description: "Development team discussions",
      members: ["john.doe", "bob.smith", "charlie.brown"],
    },
    {
      id: 4,
      name: "marketing-team",
      type: "private",
      description: "Marketing team discussions",
      members: ["jane.doe", "alice.johnson", "david.lee"],
    },
  ];
  
  export const directMessageList = [
    {
      id: 1,
      userIds: ["john.doe", "jane.doe"],
      lastMessage: {
        text: "Hey, how's it going?",
        timestamp: "2023-02-20T14:30:00.000Z",
      },
    },
    {
      id: 2,
      userIds: ["john.doe", "bob.smith"],
      lastMessage: {
        text: "Did you finish the project?",
        timestamp: "2023-02-19T10:00:00.000Z",
      },
    },
    {
      id: 3,
      userIds: ["jane.doe", "alice.johnson"],
      lastMessage: {
        text: "Let's grab lunch today!",
        timestamp: "2023-02-20T12:00:00.000Z",
      },
    },
  ];
  
  export const appList = [
    {
      id: 1,
      name: "Google Drive",
      description: "File sharing and storage",
      icon: "http://logo.clearbit.com/google.com",
    },
    {
      id: 2,
      name: "Trello",
      description: "Project management and organization",
      icon: "http://logo.clearbit.com/trello.com",
    },
    {
      id: 3,
      name: "Zoom",
      description: "Video conferencing and meetings",
      icon: "http://logo.clearbit.com/zoom.com",
    },
  ];