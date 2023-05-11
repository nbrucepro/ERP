import { Controller, Get } from '@nestjs/common';

@Controller('api/items')
export class ItemsController {
    @Get('/')
    tst(){
        return 'This is item controller...'
    }
}
