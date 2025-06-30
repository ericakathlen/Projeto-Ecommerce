require "test_helper"

class FavoritoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get favorito_index_url
    assert_response :success
  end

  test "should get new" do
    get favorito_new_url
    assert_response :success
  end

  test "should get create" do
    get favorito_create_url
    assert_response :success
  end

  test "should get destroy" do
    get favorito_destroy_url
    assert_response :success
  end
end
