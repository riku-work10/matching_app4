<div class="user-index-page">
  <%= render "partial/navbar" %>

  <div class="swipe">
    <div class="swipe--status">
      <i class="bi bi-x-lg"></i>
      <i class="bi-heart-fill"></i>
    </div>

    <!-- swiper-container に変更 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <% @users.each do |user| %>
          <div class="swiper-slide swipe--card" id="<%= user.id %>">
            <% if user.profile_image.url.nil? %>
              <div class="profile-default-img"></div>
            <% else %>
              <%= image_tag user.profile_image.url, class: "profile-img" %>
            <% end %>
            <p class="profile-name">
              <%= user.name %>
            </p>
          </div>
        <% end %>
      </div>
    </div>

    <div class="no-user">近くにお相手がいません</div>

    <div class="swipe--buttons">
      <button id="dislike"><i class="bi bi-x-lg fa-2x"></i></button>
      <button id="like"><i class="bi bi-heart-fill fa-2x"></i></button>
    </div>
  </div>
</div>