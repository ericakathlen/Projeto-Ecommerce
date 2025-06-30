require "test_helper"

class ItemCarrinhoControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get item_carrinho_new_url
    assert_response :success
  end

  test "should get create" do
    get item_carrinho_create_url
    assert_response :success
  end

  test "should get update" do
    get item_carrinho_update_url
    assert_response :success
  end

  test "should get destroy" do
    get item_carrinho_destroy_url
    assert_response :success
  end
end
