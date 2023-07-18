import { container } from 'tsyringe';
import ApiService from './apiServices';

// Register the ApiService class as a singleton in the container
//This ensures that all classes registered as a singleton has only one instance and can be used across the entire application
container.register('ApiService', { useClass: ApiService });
