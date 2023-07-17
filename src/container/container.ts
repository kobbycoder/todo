// container.ts
import { container } from 'tsyringe';
import ApiService from '../services/apiServices';
// Import other services if needed

// Register the ApiService class as a singleton in the container
container.registerSingleton('ApiService', ApiService);
// Register other services as needed
