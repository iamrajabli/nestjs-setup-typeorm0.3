import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { BookEntity } from './book.entity';

@Controller('book')
export class BookController {
	constructor(private bookService: BookService) {}

	@Get()
	async get(): Promise<BookEntity[]> {
		return await this.bookService.getBooks();
	}

	@Post()
	async create(@Body('book') dto: CreateBookDto) {
		return await this.bookService.createBook(dto);
	}
}
