import { IWorkspace } from "@/features/workspace/types/workspace.types";

export enum PageState {
  Edit = "edit",
  Reading = "reading",
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  emailVerifiedAt: Date;
  avatarUrl: string;
  timezone: string;
  settings: IUserSettings;
  invitedById: string;
  lastLoginAt: string;
  lastActiveAt: Date;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
  workspaceId: string;
  deactivatedAt: Date;
  deletedAt: Date;
  fullPageWidth: boolean; // used for update
  pageState: string; // used for update
}

export interface ICurrentUser {
  user: IUser;
  workspace: IWorkspace;
}

export interface IUserSettings {
  preferences: {
    fullPageWidth: boolean;
    pageState: string;
  };
}
