from fastapi import FastAPI

from backend.schemas.user_schema import UsersPublic

app = FastAPI(title="Gamescope API")


users = []


@app.get("/")
def teste():
    return {"message": "Hello World"}


@app.get("/users", response_model=list[UsersPublic])
def get_users():
    return users


@app.post("/users", response_model=UsersPublic)
def create_user():
    pass


@app.put("/users/{user_id}")
def update_user(user_id: int):
    pass


@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    pass
