import "reflect-metadata";
import { container } from 'tsyringe';
import ApiService from './apiServices';

const instance = container.register('ApiService',  ApiService);

export const api = instance.resolve(ApiService)

export default container


