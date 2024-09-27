# TaskManagementApp
A web application for simple task management.

## How to run the application
- backend: dotnet run TaskManagementApi.csproj
- frontend: ng serve
- open Chrome, go to url: http://localhost:4500/  (development mode) or http://localhost:6001/  (release mode)

## How to run the tests
- unit & integration tests: ng test
- e2e tests: ng run TaskManagementApp:cypress-open

## Ports
- backend: development port 1994 (launchSettings.json)   release port 6001
- frontend: development port 4500 (angular.json)     release port 6001

## Frameworks
- backend: .NET 8
- frontend: Angular 17

## IDE
- backend: Visual Studio
- frontend: Visual Studio Code

## Languages
- backend: TypeScript
- frontend: C#

## Database
- Sqlite

# Instructions for tests
You will follow the specific instructions in the test files. Try to do as many as possible but no need to stress yourself if you can not finish all of them. Just try to do at least 2 tests for each catogory (unit, integration, E2E).
## Unit tests
Please open calculations.spec.ts and complete the test cases.
### Test File Path: 
.\TaskManagementApp\src\app\Helpers\calculations.spec.ts
### Source File Path: 
.\TaskManagementApp\src\app\Helpers\calculations.ts

## Integration tests
Please open task.service.spec.ts and user.service.spec.ts and complete the test cases.
### Test File Path: 
.\TaskManagementApp\src\app\services\task.service.spec.ts
### Source File Path: 
.\TaskManagementApp\src\app\services\task.service.ts

### Test File Path: 
.\TaskManagementApp\src\app\services\user.service.spec.ts
### Source File Path: 
.\TaskManagementApp\src\app\services\user.service.ts

## E2E tests
Please open calculations.spec.ts and complete the test cases.
### Test File Path: 
.\TaskManagementApp\cypress\e2e\spec.cy.ts
### Source File Path: 
.\TaskManagementApp\src\app\

