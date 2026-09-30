from fastapi import FastAPI  # type: ignore[import-not-found]
from pydantic import BaseModel  # type: ignore[import-not-found]

class Student(BaseModel):
    id: int
    name: str
    email: str

app = FastAPI()
@app.get("/getStudents")
def getStudents():
    return "get Students api called"
@app.post("/register")
def register(stu:Student):
    return stu
@app.put("/update")
def updateprofile():
    return "update profile called"
@app.delete("/delete")
def deleteprofile():
    return "delete profile called"
@app.get("/getStudentDet/{userid}")
def getStudentDet(userid:int):
    return {"user_id": userid}
@app.get("/getStudentsdetails")
def getstudentsdetails(page:int=1,limit:int=10):
    return {"page": page, "limit": limit}
