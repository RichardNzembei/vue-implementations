import { defineStore } from "pinia";
import { computed,ref } from "vue";
export const useStudentstore=defineStore('student',()=>{
    const student=ref({
        RegNo:'',
        Password:''
    })
    function setStudent(newStudent){
        student.value=newStudent
    }
    function resetStudent(){
        student.value={RegNo:'',Password:''}
    }
    return {student,setStudent,resetStudent}
})