# API Test Cases

## 1. Get All Tasks

**Method:** GET

**Endpoint:** `/api/tasks`

**Expected result:** HTTP 200 with a list of tasks.

## 2. Get One Task

**Method:** GET

**Endpoint:** `/api/tasks/1`

**Expected result:** HTTP 200 with the requested task.

## 3. Create a Task

**Method:** POST

**Endpoint:** `/api/tasks`

**Request body:**

```json
{
  "title": "Complete backend assignment",
  "description": "Finish the Git and GitHub version control task",
  "status": "pending"
}
```

**Expected result:** HTTP 201 with the newly created task.

## 4. Invalid Task

**Method:** POST

**Endpoint:** `/api/tasks`

**Request body:**

```json
{
  "description": "This task has no title"
}
```

**Expected result:** HTTP 400 with a validation error.

## 5. Update a Task

**Method:** PUT

**Endpoint:** `/api/tasks/1`

**Expected result:** HTTP 200 with the updated task.

## 6. Delete a Task

**Method:** DELETE

**Endpoint:** `/api/tasks/1`

**Expected result:** HTTP 200 with a task deletion confirmation.

## 7. Non-existent Task

**Method:** GET

**Endpoint:** `/api/tasks/999`

**Expected result:** HTTP 404 with a "Task not found" message.
