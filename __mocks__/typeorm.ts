import { mock } from 'jest-mock-extended';
import { Repository } from 'typeorm';

export const repositoryMock = mock<Repository<any>>();

export const getConnection = jest.fn().mockReturnValue({
  getRepository: () => repositoryMock,
});

export class BaseEntity {}
export const ObjectIdColumn = () => {};
export const Column = () => {};
export const Index = () => {};
export const CreateDateColumn = () => {};
export const UpdateDateColumn = () => {};
export const Entity = () => {};
