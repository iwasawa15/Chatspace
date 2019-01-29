class MessagesController < ApplicationController
  def index
    @group = params[:group]
    @messages = @group.messages
  end

  def create
    @message = Message.new(message_params)
    if @message.save

    else

    end
end
