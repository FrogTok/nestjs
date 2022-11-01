import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from '../boards/dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipe/board-status-validation.pipe';
import { Board } from 'src/boards/board.entity';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get()
    getAllBoard() : Promise<Board[]>
    {
        return this.boardsService.getAllBoards();
    }

    // @Get()
    // getAllBoard() : Board[] 
    // {
    //     return this.boardsService.getAllBoards();
    // }

    @Get('/:id')
    getBoardById( @Param('id') id: number ): Promise<Board> 
    {
        return this.boardsService.getBoardById(id);
    }

    // @Get('/:id')
    // getBoardById( @Param('id') id: string ): Board 
    // {
    //     return this.boardsService.getBoardById(id);
    // }

    @Post()
    @UsePipes(ValidationPipe) // dto에 있는 유효성 체크 하기위해
    createBoard( @Body() createBoardDto: CreateBoardDto ): Promise<Board> 
    {
        return this.boardsService.createBoard(createBoardDto);
    }

    // @Post()
    // @UsePipes(ValidationPipe) // dto에 있는 유효성 체크 하기위해
    // createBoard( @Body() createBoardDto: CreateBoardDto ): Board 
    // {
    //     return this.boardsService.createBoard(createBoardDto);
    // }

    @Delete('/:id')
    deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void>
    {
       return this.boardsService.deletBoard(id);
    }

    // @Delete('/:id')
    // deleteBoard(@Param('id') id: string): void 
    // {
    //     this.boardsService.deletBoard(id);
    // }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ): Promise<Board>
    {
        return this.boardsService.updateBoardStatus(id,status);
    }

    // @Patch('/:id/status')
    // updateBoardStatus(
    //     @Param('id') id: string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus
    // ): Board 
    // {
    //     return this.boardsService.updateBoardStatus(id,status);
    // }
}
