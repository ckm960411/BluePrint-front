import { omit } from "lodash";

export const GET_ALL_MEMOS = "getAllMemos";
const getAllMemos = (...args: any[]) => [GET_ALL_MEMOS, ...args];

const getThisMonthTasks = (...args: any[]) => ["get-this-month-tasks", ...args];

const getAllProjects = (...args: any[]) => ["get-all-projects", ...args];

const getAllComments = (...args: any[]) => ["get-all-comments", ...args];

const getWorkCount = (...args: any[]) => ["get-work-count", ...args];

export const QueryKeys = {
  // WORK
  getWorkCount,

  // MEMO
  getAllMemos,

  // COMMENT
  getAllComments,

  // this month tasks
  getThisMonthTasks,

  // PROJECTS
  getAllProjects,
};

const projectKeys = {
  all: ["projects"] as const,
  list: () => [...projectKeys.all, "list"] as const,
  details: () => [...projectKeys.all, "detail"] as const,
  detail: (id: number) => [...projectKeys.details(), id] as const,
};

export const milestoneKeys = {
  all: (projectId?: number) => ["milestones", projectId] as const,
  list: (projectId?: number) =>
    [...milestoneKeys.all(projectId), "list"] as const,
  details: (projectId?: number) =>
    [...milestoneKeys.all(projectId), "detail"] as const,
  detail: (milestoneId: number, projectId?: number) =>
    [...milestoneKeys.details(projectId), milestoneId] as const,
};

type TaskKeysAllArgs = { projectId?: number; milestoneId?: number };
export const taskKeys = {
  all: (arg: TaskKeysAllArgs) => ["tasks", ...Object.values(arg)] as const,
  list: (arg: TaskKeysAllArgs) => [...taskKeys.all(arg), "list"] as const,
  details: (arg: TaskKeysAllArgs) => [...taskKeys.all(arg), "detail"] as const,
  detail: ({ taskId, ...rest }: TaskKeysAllArgs & { taskId: number }) =>
    [...taskKeys.details(omit(rest, "taskId")), taskId] as const,
  urgent: (arg: TaskKeysAllArgs) => [...taskKeys.all(arg), "urgent"] as const,
};

type MemoKeysAllArgs = { projectId?: number; milestoneId?: number };
export const memoKeys = {
  all: (arg: MemoKeysAllArgs) => ["memos", ...Object.values(arg)] as const,
  list: (arg: MemoKeysAllArgs) => [...memoKeys.all(arg), "list"] as const,
  details: (arg: MemoKeysAllArgs) => [...memoKeys.all(arg), "detail"] as const,
  detail: ({ memoId, ...rest }: MemoKeysAllArgs & { memoId: number }) =>
    [...memoKeys.details(rest), memoId] as const,
};

export const commentKeys = {
  all: (arg: { projectId?: number; milestoneId?: number }) =>
    ["comments", ...Object.values(arg)] as const,
};
