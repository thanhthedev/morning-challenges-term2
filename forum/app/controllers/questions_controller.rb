class QuestionsController < ApplicationController
    def create
        @questions = Question.create(question_params)
        redirect_to root_path
    end

    def show
        @question = Question.find_by_id(params[:id])
        @answers = Answer.all
    end
    
    
    
    
    
    
    private

    def question_params
        params.require(:question).permit(:email, :body)
    end

end

