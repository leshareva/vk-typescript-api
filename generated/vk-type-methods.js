

var methods = ["users.get", "users.search", "users.isAppUser", "users.getSubscriptions", "users.getFollowers", "users.report", "users.getNearby", "auth.checkPhone", "auth.signup", "auth.confirm", "auth.restore", "wall.get", "wall.search", "photos.createAlbum", "photos.editAlbum", "photos.getAlbums", "photos.get", "photos.getAlbumsCount", "photos.getById", "photos.getUploadServer", "photos.getOwnerPhotoUploadServer", "photos.getChatUploadServer", "photos.getMarketUploadServer", "photos.getMarketAlbumUploadServer", "photos.saveMarketPhoto", "photos.saveMarketAlbumPhoto", "photos.saveOwnerPhoto", "photos.saveWallPhoto", "photos.getWallUploadServer", "photos.getMessagesUploadServer", "photos.saveMessagesPhoto", "photos.report", "photos.reportComment", "photos.search", "friends.get", "friends.getOnline", "friends.getMutual", "friends.getRecent", "friends.getRequests", "friends.add", "friends.edit", "friends.delete", "friends.getLists", "friends.addList", "friends.editList", "friends.deleteList", "friends.getAppUsers", "friends.getByPhones", "friends.deleteAllRequests", "friends.getSuggestions", "friends.areFriends", "friends.getAvailableForCall", "friends.search", "widgets.getComments", "widgets.getPages", "secure.getAppBalance", "secure.getTransactionsHistory", "secure.getSMSHistory", "secure.sendSMSNotification", "secure.sendNotification", "secure.setCounter", "secure.setUserLevel", "secure.getUserLevel", "storage.get", "storage.set", "storage.getKeys", "orders.get", "orders.getById", "orders.changeState", "orders.getAmount", "photos.save", "photos.copy", "photos.edit", "photos.move", "photos.makeCover", "photos.reorderAlbums", "photos.reorderPhotos", "photos.getAll", "photos.getUserPhotos", "photos.deleteAlbum", "photos.delete", "photos.restore", "photos.confirmTag", "photos.getComments", "photos.getAllComments", "photos.createComment", "photos.deleteComment", "photos.restoreComment", "photos.editComment", "photos.getTags", "photos.putTag", "photos.removeTag", "photos.getNewTags", "wall.getById", "wall.post", "wall.repost", "wall.getReposts", "wall.edit", "wall.delete", "wall.restore", "wall.pin", "wall.unpin", "wall.getComments", "wall.createComment", "wall.editComment", "wall.deleteComment", "wall.restoreComment", "wall.reportPost", "wall.reportComment", "status.get", "status.set", "audio.get", "audio.getById", "audio.getLyrics", "audio.search", "audio.getUploadServer", "audio.save", "audio.add", "audio.delete", "audio.edit", "audio.reorder", "audio.restore", "audio.getAlbums", "audio.addAlbum", "audio.editAlbum", "audio.deleteAlbum", "audio.moveToAlbum", "audio.setBroadcast", "audio.getBroadcastList", "audio.getRecommendations", "audio.getPopular", "audio.getCount", "leads.complete", "leads.start", "leads.getStats", "leads.getUsers", "leads.checkUser", "leads.metricHit", "pages.get", "pages.save", "pages.saveAccess", "pages.getHistory", "pages.getTitles", "pages.getVersion", "pages.parseWiki", "pages.clearCache", "groups.isMember", "groups.getById", "groups.get", "groups.getMembers", "groups.join", "groups.leave", "groups.search", "groups.getCatalog", "groups.getCatalogInfo", "groups.getInvites", "groups.getInvitedUsers", "groups.banUser", "groups.unbanUser", "groups.getBanned", "groups.create", "groups.edit", "groups.editPlace", "groups.getSettings", "groups.getRequests", "groups.editManager", "groups.invite", "groups.addLink", "groups.deleteLink", "groups.editLink", "groups.reorderLink", "groups.removeUser", "groups.approveRequest", "groups.getCallbackConfirmationCode", "groups.getCallbackServerSettings", "groups.getCallbackSettings", "groups.setCallbackServer", "groups.setCallbackServerSettings", "groups.setCallbackSettings", "board.getTopics", "board.getComments", "board.addTopic", "board.createComment", "board.deleteTopic", "board.editTopic", "board.editComment", "board.restoreComment", "board.deleteComment", "board.openTopic", "board.closeTopic", "board.fixTopic", "board.unfixTopic", "video.get", "video.edit", "video.add", "video.save", "video.delete", "video.restore", "video.search", "video.getUserVideos", "video.getAlbums", "video.getAlbumById", "video.addAlbum", "video.editAlbum", "video.deleteAlbum", "video.reorderAlbums", "video.reorderVideos", "video.addToAlbum", "video.removeFromAlbum", "video.getAlbumsByVideo", "video.getComments", "video.createComment", "video.deleteComment", "video.restoreComment", "video.editComment", "video.getTags", "video.putTag", "video.removeTag", "video.getNewTags", "video.report", "video.reportComment", "video.getCatalog", "video.getCatalogSection", "video.hideCatalogSection", "notes.get", "notes.getById", "notes.add", "notes.edit", "notes.delete", "notes.getComments", "notes.createComment", "notes.editComment", "notes.deleteComment", "notes.restoreComment", "places.add", "places.getById", "places.search", "places.checkin", "places.getCheckins", "places.getTypes", "account.getCounters", "account.setNameInMenu", "account.setOnline", "account.setOffline", "account.lookupContacts", "account.registerDevice", "account.unregisterDevice", "account.setSilenceMode", "account.getPushSettings", "account.setPushSettings", "account.getAppPermissions", "account.getActiveOffers", "account.banUser", "account.unbanUser", "account.getBanned", "account.getInfo", "account.setInfo", "account.changePassword", "account.getProfileInfo", "account.saveProfileInfo", "messages.get", "messages.getDialogs", "messages.getById", "messages.search", "messages.getHistory", "messages.getHistoryAttachments", "messages.send", "messages.delete", "messages.deleteDialog", "messages.restore", "messages.markAsRead", "messages.markAsImportant", "messages.getLongPollServer", "messages.getLongPollHistory", "messages.getChat", "messages.createChat", "messages.editChat", "messages.getChatUsers", "messages.setActivity", "messages.searchDialogs", "messages.addChatUser", "messages.removeChatUser", "messages.getLastActivity", "messages.setChatPhoto", "messages.deleteChatPhoto", "messages.denyMessagesFromCommunity", "messages.allowMessagesFromCommunity", "messages.isMessagesFromGroupAllowed", "newsfeed.get", "newsfeed.getRecommended", "newsfeed.getComments", "newsfeed.getMentions", "newsfeed.getBanned", "newsfeed.addBan", "newsfeed.deleteBan", "newsfeed.ignoreItem", "newsfeed.unignoreItem", "newsfeed.search", "newsfeed.getLists", "newsfeed.saveList", "newsfeed.deleteList", "newsfeed.unsubscribe", "newsfeed.getSuggestedSources", "likes.getList", "likes.add", "likes.delete", "likes.isLiked", "polls.getById", "polls.addVote", "polls.deleteVote", "polls.getVoters", "polls.create", "polls.edit", "docs.get", "docs.getById", "docs.getUploadServer", "docs.getWallUploadServer", "docs.save", "docs.delete", "docs.add", "docs.getTypes", "docs.search", "docs.edit", "fave.getUsers", "fave.getPhotos", "fave.getPosts", "fave.getVideos", "fave.getLinks", "fave.getMarketItems", "fave.addUser", "fave.removeUser", "fave.addGroup", "fave.removeGroup", "fave.addLink", "fave.removeLink", "notifications.get", "notifications.markAsViewed", "stats.get", "stats.trackVisitor", "stats.getPostReach", "search.getHints", "apps.getCatalog", "apps.get", "apps.sendRequest", "apps.deleteAppRequests", "apps.getFriendsList", "apps.getLeaderboard", "secure.addAppEvent", "apps.getScore", "utils.checkLink", "utils.resolveScreenName", "utils.getServerTime", "database.getCountries", "database.getRegions", "database.getStreetsById", "database.getCountriesById", "database.getCities", "database.getCitiesById", "database.getUniversities", "database.getSchools", "database.getSchoolClasses", "database.getFaculties", "database.getChairs", "gifts.get", "ads.getAccounts", "ads.getClients", "ads.createClients", "ads.updateClients", "ads.deleteClients", "ads.getCampaigns", "ads.createCampaigns", "ads.updateCampaigns", "ads.deleteCampaigns", "ads.getAds", "ads.getAdsLayout", "ads.getAdsTargeting", "ads.createAds", "ads.updateAds", "ads.deleteAds", "ads.checkLink", "ads.getStatistics", "ads.getDemographics", "ads.getAdsPostsReach", "ads.getBudget", "ads.getOfficeUsers", "ads.addOfficeUsers", "ads.removeOfficeUsers", "ads.getTargetingStats", "ads.getSuggestions", "ads.getCategories", "ads.getUploadURL", "ads.getVideoUploadURL", "ads.getFloodStats", "ads.getRejectionReason", "ads.createTargetGroup", "ads.updateTargetGroup", "ads.deleteTargetGroup", "ads.getTargetGroups", "ads.importTargetContacts", "secure.checkToken", "market.get", "market.getById", "market.search", "market.getAlbums", "market.getAlbumById", "market.createComment", "market.getComments", "market.deleteComment", "market.restoreComment", "market.editComment", "market.reportComment", "market.getCategories", "market.report", "market.add", "market.edit", "market.delete", "market.restore", "market.reorderItems", "market.reorderAlbums", "market.addAlbum", "market.editAlbum", "market.deleteAlbum", "market.removeFromAlbum", "market.addToAlbum"];

for(var method of methods)
{
VK[method.replace(".", "_")] = function(method)
    {
    return function()
      {
      VK.api.apply(VK, [method].concat(Array.prototype.slice.call(arguments)));
      }
    }(method);
}
