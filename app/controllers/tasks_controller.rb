class TasksController < ApplicationController
  respond_to :html, :json

  def index
    @tasks = Task.all
    respond_with @tasks
  end

  def create
    @task = Task.new(task_params)
    @task.save
    # Default Rails responders will respond with an unprocessable entity (422) when there are validation errors
    respond_with(@task)
  end

private
  def task_params
    params.require(:task).permit!
  end
end
