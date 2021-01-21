import {Pipe, PipeTransform} from '@angular/core'; 
@Pipe ({ 
   name : 'stringAdd'
}) 
export class StringAddPipe implements PipeTransform {
    transform(val : string) : string {
        return val+2
    }
}