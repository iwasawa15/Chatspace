class GroupsController < ApplicationController
  before_action :set_group, only: [:edit, :update]

  def new
    @group = Group.new
  end

  def create
    if Group.create(group_params)
      redirect_to :root, notice: "グループを作成しました"
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @group.udpate(group_params)
      redirect_to :root, notice: "グループを編集しました"
    else
      render :edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:name)
  end

  def set_group
    @group = Group.find(params[:id])
  end
end
