import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
	constructor(
		@InjectRepository(BookEntity)
		private bookRepository: Repository<BookEntity>,
	) {}

	async getBooks(): Promise<BookEntity[]> {
		return await this.bookRepository.find();
	}

	async createBook(dto: CreateBookDto): Promise<BookEntity> {
		const book = new BookEntity();
		Object.assign(book, dto);

		return await this.bookRepository.save(book);
	}
}
