from pydantic import BaseModel, EmailStr, Field


class UserSchema(BaseModel):
    id: int
    email: EmailStr
    username: str = Field(..., min_length=3, max_length=30)
    password: str = Field(..., min_length=8)


class UsersPublic(BaseModel):
    id: int
    email: EmailStr
    username: str = Field(..., min_length=3, max_length=30)
