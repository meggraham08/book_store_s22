class Api::BooksController < ApplicationController

  before_action :set_book, only: [:show, :update, :destroy]

  def index 
    render json: Book.all
  end

  def show 
    render json: @book
  end 

  def create
    @book = Book.new(book_params)
    if @book.save
      render json: @book
    else
      render json: { errors: @book.errors },  status: :unprocessable_entity
    end
  end

  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: { errors: @book.errors },  status: :unprocessable_entity
    end
  end


  def destroy
    @book.destroy
    render json: { message: 'Book delete'}
  end

  private 
    def book_params
      params.require(:book).permit(:title, :author_name, :genre)
    end

    def set_book
      @book = Book.find(params[:id])
    end
end
