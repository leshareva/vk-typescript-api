// Type definitions for VK JavaScript SDK
// Project: http://vk.com/dev/Javascript_SDK
// Definitions by: Aleksey Nemiro <https://github.com/alekseynemiro>

interface VkModules {

	callbacks: Array<any>;

	loaded(name: string): void;

	load(name: string, callback: Function, path: string): void;

}

interface VkWidgets {

	// TODO

}

interface VkStatic {

	/**
	 * Инициализирует соединение с родительским окном для запуска внешних вызовов. При успешной инициализации соединения вызывается функция success.
	 * @param success Функция, которая будет вызвана в случае успешной инициализации.
	 * @param failure Функция, которая будет вызвана в случае ошибки.
	 * @param ver Версия API. На данный момент актуальная версия 5.31
	 */
	init(success: Function, failure: Function, ver: string): void;

	initXDConn(): void;

	/**
	 * Осуществляет внешний вызов метода Client API <http://vk.com/dev/clientapi>.
	 * @param methodName Название метода.
	 * @param args Параметры.
	 */
	callMethod(methodName: string, args?: any[]|string|number|any): void;

	/**
	 * Добавляет функцию callback в качестве обработчика события name.
	 */
	addCallback(eventName: string, callback: Function): void;

	/**
	 * Удаляет функцию callback из обработчика события name.
	 */
	removeCallback(eventName: string): void;

	/**
	 * Вспомогательный метод, который проверяет является ли указанное значение функцией или нет.
	 */
	isFunc(obj: any): boolean;

	params: Array<any>;

	loadParams(q: any): void;

	addScript(url: string): void;

	/**
	 * Выполняет запрос к ВКонтакте API и передаёт полученные данные в функцию callback.
	 *
	 * @param method Название метода API.
	 * @param params Объект с параметрами запроса.
	 * @param callback Функция для обработки результата.
	 */
	api(method: string, params?: any, callback?: Function): void;
	
    users_get (params: {
	user_ids?: string,
	fields?: string,
	name_case?: string
	}, callback?: Function): void;
users_search (params: {
	q?: string,
	sort?: number,
	offset?: number,
	count?: number,
	fields?: string,
	city?: number,
	country?: number,
	hometown?: string,
	university_country?: number,
	university?: number,
	university_year?: number,
	university_faculty?: number,
	university_chair?: number,
	sex?: number,
	status?: number,
	age_from?: number,
	age_to?: number,
	birth_day?: number,
	birth_month?: number,
	birth_year?: number,
	online?: 0 | 1,
	has_photo?: 0 | 1,
	school_country?: number,
	school_city?: number,
	school_class?: number,
	school?: number,
	school_year?: number,
	religion?: string,
	interests?: string,
	company?: string,
	position?: string,
	group_id?: number,
	from_list?: string
	}, callback?: Function): void;
users_isAppUser (params: {
	user_id?: number
	}, callback?: Function): void;
users_getSubscriptions (params: {
	user_id?: number,
	extended?: 0 | 1,
	offset?: number,
	count?: number,
	fields?: string
	}, callback?: Function): void;
users_getFollowers (params: {
	user_id?: number,
	offset?: number,
	count?: number,
	fields?: string,
	name_case?: string
	}, callback?: Function): void;
users_report (params: {
	user_id: number,
	type: string,
	comment?: string
	}, callback?: Function): void;
users_getNearby (params: {
	latitude: number,
	longitude: number,
	accuracy?: number,
	timeout?: number,
	radius?: number,
	fields?: string,
	name_case?: string
	}, callback?: Function): void;
auth_checkPhone (params: {
	phone: string,
	client_id?: number,
	client_secret: string,
	auth_by_phone?: 0 | 1
	}, callback?: Function): void;
auth_signup (params: {
	first_name: string,
	last_name: string,
	client_id: number,
	client_secret: string,
	phone: string,
	password?: string,
	test_mode?: 0 | 1,
	voice?: 0 | 1,
	sex?: number,
	sid?: string
	}, callback?: Function): void;
auth_confirm (params: {
	client_id: number,
	client_secret: string,
	phone: string,
	code: string,
	password?: string,
	test_mode?: 0 | 1,
	intro?: number
	}, callback?: Function): void;
auth_restore (params: {
	phone: string
	}, callback?: Function): void;
wall_get (params: {
	owner_id?: number,
	domain?: string,
	offset?: number,
	count?: number,
	filter?: string,
	extended?: 0 | 1,
	fields?: string
	}, callback?: Function): void;
wall_search (params: {
	owner_id?: number,
	domain?: string,
	query?: string,
	owners_only?: 0 | 1,
	count?: number,
	extended?: 0 | 1,
	fields?: string
	}, callback?: Function): void;
photos_createAlbum (params: {
	title: string,
	group_id?: number,
	description?: string,
	privacy_view?: string,
	privacy_comment?: string,
	upload_by_admins_only?: 0 | 1,
	comments_disabled?: 0 | 1
	}, callback?: Function): void;
photos_editAlbum (params: {
	album_id: number,
	title?: string,
	description?: string,
	owner_id?: number,
	privacy_view?: string,
	privacy_comment?: string,
	upload_by_admins_only?: 0 | 1,
	comments_disabled?: 0 | 1
	}, callback?: Function): void;
photos_getAlbums (params: {
	owner_id?: number,
	album_ids?: string,
	offset?: number,
	count?: number,
	need_system?: 0 | 1,
	need_covers?: 0 | 1,
	photo_sizes?: 0 | 1
	}, callback?: Function): void;
photos_get (params: {
	owner_id?: number,
	album_id?: string,
	photo_ids?: string,
	rev?: 0 | 1,
	extended?: 0 | 1,
	feed_type?: string,
	feed?: number,
	photo_sizes?: 0 | 1,
	offset?: number,
	count?: number
	}, callback?: Function): void;
photos_getAlbumsCount (params: {
	user_id?: number,
	group_id?: number
	}, callback?: Function): void;
photos_getById (params: {
	photos: string,
	extended?: 0 | 1,
	photo_sizes?: 0 | 1
	}, callback?: Function): void;
photos_getUploadServer (params: {
	album_id?: number,
	group_id?: number
	}, callback?: Function): void;
photos_getOwnerPhotoUploadServer (params: {
	owner_id?: number
	}, callback?: Function): void;
photos_getChatUploadServer (params: {
	chat_id: number,
	crop_x?: number,
	crop_y?: number,
	crop_width?: number
	}, callback?: Function): void;
photos_getMarketUploadServer (params: {
	group_id: number,
	main_photo?: 0 | 1,
	crop_x?: number,
	crop_y?: number,
	crop_width?: number
	}, callback?: Function): void;
photos_getMarketAlbumUploadServer (params: {
	group_id: number
	}, callback?: Function): void;
photos_saveMarketPhoto (params: {
	group_id?: number,
	photo: string,
	server: number,
	hash: string,
	crop_data?: string,
	crop_hash?: string
	}, callback?: Function): void;
photos_saveMarketAlbumPhoto (params: {
	group_id: number,
	photo: string,
	server: number,
	hash: string
	}, callback?: Function): void;
photos_saveOwnerPhoto (params: {
	server?: string,
	hash?: string,
	photo?: string
	}, callback?: Function): void;
photos_saveWallPhoto (params: {
	user_id?: number,
	group_id?: number,
	photo: string,
	server?: number,
	hash?: string,
	latitude?: number,
	longitude?: number,
	caption?: string
	}, callback?: Function): void;
photos_getWallUploadServer (params: {
	group_id?: number
	}, callback?: Function): void;
photos_getMessagesUploadServer (params: any, callback?: Function): void;
photos_saveMessagesPhoto (params: {
	photo: string,
	server?: number,
	hash?: string
	}, callback?: Function): void;
photos_report (params: {
	owner_id: number,
	photo_id: number,
	reason?: number
	}, callback?: Function): void;
photos_reportComment (params: {
	owner_id: number,
	comment_id: number,
	reason?: number
	}, callback?: Function): void;
photos_search (params: {
	q?: string,
	lat?: number,
	long?: number,
	start_time?: number,
	end_time?: number,
	sort?: number,
	offset?: number,
	count?: number,
	radius?: number
	}, callback?: Function): void;
friends_get (params: {
	user_id?: number,
	order?: string,
	list_id?: number,
	count?: number,
	offset?: number,
	fields?: string,
	name_case?: string
	}, callback?: Function): void;
friends_getOnline (params: {
	user_id?: number,
	list_id?: number,
	online_mobile?: 0 | 1,
	order?: string,
	count?: number,
	offset?: number
	}, callback?: Function): void;
friends_getMutual (params: {
	source_uid?: number,
	target_uid?: number,
	target_uids?: string,
	order?: string,
	count?: number,
	offset?: number
	}, callback?: Function): void;
friends_getRecent (params: {
	count?: number
	}, callback?: Function): void;
friends_getRequests (params: {
	offset?: number,
	count?: number,
	extended?: 0 | 1,
	need_mutual?: 0 | 1,
	out?: 0 | 1,
	sort?: number,
	suggested?: 0 | 1
	}, callback?: Function): void;
friends_add (params: {
	user_id: number,
	text?: string,
	follow?: 0 | 1
	}, callback?: Function): void;
friends_edit (params: {
	user_id: number,
	list_ids?: string
	}, callback?: Function): void;
friends_delete (params: {
	user_id: number
	}, callback?: Function): void;
friends_getLists (params: {
	user_id?: number,
	return_system?: 0 | 1
	}, callback?: Function): void;
friends_addList (params: {
	name: string,
	user_ids?: string
	}, callback?: Function): void;
friends_editList (params: {
	name?: string,
	list_id: number,
	user_ids?: string,
	add_user_ids?: string,
	delete_user_ids?: string
	}, callback?: Function): void;
friends_deleteList (params: {
	list_id: number
	}, callback?: Function): void;
friends_getAppUsers (params: any, callback?: Function): void;
friends_getByPhones (params: {
	phones?: string,
	fields?: string
	}, callback?: Function): void;
friends_deleteAllRequests (params: any, callback?: Function): void;
friends_getSuggestions (params: {
	filter?: string,
	count?: number,
	offset?: number,
	fields?: string,
	name_case?: string
	}, callback?: Function): void;
friends_areFriends (params: {
	user_ids: string,
	need_sign?: 0 | 1
	}, callback?: Function): void;
friends_getAvailableForCall (params: {
	fields?: string,
	name_case?: string
	}, callback?: Function): void;
friends_search (params: {
	user_id: number,
	q?: string,
	fields?: string,
	name_case?: string,
	offset?: number,
	count?: number
	}, callback?: Function): void;
widgets_getComments (params: {
	widget_api_id?: number,
	url?: string,
	page_id?: string,
	order?: string,
	fields?: string,
	count?: number
	}, callback?: Function): void;
widgets_getPages (params: {
	widget_api_id?: number,
	order?: string,
	period?: string,
	count?: number
	}, callback?: Function): void;
secure_getAppBalance (params: any, callback?: Function): void;
secure_getTransactionsHistory (params: any, callback?: Function): void;
secure_getSMSHistory (params: {
	user_id?: number,
	date_from?: number,
	date_to?: number,
	limit?: number
	}, callback?: Function): void;
secure_sendSMSNotification (params: {
	user_id: number,
	message: string
	}, callback?: Function): void;
secure_sendNotification (params: {
	user_ids?: string,
	user_id?: number,
	message: string
	}, callback?: Function): void;
secure_setCounter (params: {
	counters?: string,
	user_id?: number,
	counter?: number
	}, callback?: Function): void;
secure_setUserLevel (params: {
	levels?: string,
	user_id?: number,
	level?: number
	}, callback?: Function): void;
secure_getUserLevel (params: {
	user_ids: string
	}, callback?: Function): void;
storage_get (params: {
	key?: string,
	keys?: string,
	user_id?: number
	}, callback?: Function): void;
storage_set (params: {
	key: string,
	value?: string,
	user_id?: number
	}, callback?: Function): void;
storage_getKeys (params: {
	user_id?: number,
	count?: number
	}, callback?: Function): void;
orders_get (params: {
	count?: number,
	test_mode?: 0 | 1
	}, callback?: Function): void;
orders_getById (params: {
	order_id?: number,
	order_ids?: string,
	test_mode?: 0 | 1
	}, callback?: Function): void;
orders_changeState (params: {
	order_id: number,
	action: string,
	app_order_id?: number,
	test_mode?: 0 | 1
	}, callback?: Function): void;
orders_getAmount (params: {
	user_id: number,
	votes: string
	}, callback?: Function): void;
photos_save (params: {
	album_id?: number,
	group_id?: number,
	server?: number,
	photos_list?: string,
	hash?: string,
	latitude?: number,
	longitude?: number,
	caption?: string
	}, callback?: Function): void;
photos_copy (params: {
	owner_id: number,
	photo_id: number,
	access_key?: string
	}, callback?: Function): void;
photos_edit (params: {
	owner_id?: number,
	photo_id: number,
	caption?: string,
	latitude?: number,
	longitude?: number,
	place_str?: string,
	foursquare_id?: string,
	delete_place?: 0 | 1
	}, callback?: Function): void;
photos_move (params: {
	owner_id?: number,
	target_album_id: number,
	photo_id: number
	}, callback?: Function): void;
photos_makeCover (params: {
	owner_id?: number,
	photo_id: number,
	album_id?: number
	}, callback?: Function): void;
photos_reorderAlbums (params: {
	owner_id?: number,
	album_id: number,
	before?: number,
	after?: number
	}, callback?: Function): void;
photos_reorderPhotos (params: {
	owner_id?: number,
	photo_id: number,
	before?: number,
	after?: number
	}, callback?: Function): void;
photos_getAll (params: {
	owner_id?: number,
	extended?: 0 | 1,
	offset?: number,
	count?: number,
	photo_sizes?: 0 | 1,
	no_service_albums?: 0 | 1,
	need_hidden?: 0 | 1,
	skip_hidden?: 0 | 1
	}, callback?: Function): void;
photos_getUserPhotos (params: {
	user_id?: number,
	offset?: number,
	count?: number,
	extended?: 0 | 1,
	sort?: string
	}, callback?: Function): void;
photos_deleteAlbum (params: {
	album_id: number,
	group_id?: number
	}, callback?: Function): void;
photos_delete (params: {
	owner_id?: number,
	photo_id: number
	}, callback?: Function): void;
photos_restore (params: {
	owner_id?: number,
	photo_id: number
	}, callback?: Function): void;
photos_confirmTag (params: {
	owner_id?: number,
	photo_id: string,
	tag_id: number
	}, callback?: Function): void;
photos_getComments (params: {
	owner_id?: number,
	photo_id: number,
	need_likes?: 0 | 1,
	start_comment_id?: number,
	offset?: number,
	count?: number,
	sort?: string,
	access_key?: string,
	extended?: 0 | 1,
	fields?: string
	}, callback?: Function): void;
photos_getAllComments (params: {
	owner_id?: number,
	album_id?: number,
	need_likes?: 0 | 1,
	offset?: number,
	count?: number
	}, callback?: Function): void;
photos_createComment (params: {
	owner_id?: number,
	photo_id: number,
	message?: string,
	attachments?: string,
	from_group?: 0 | 1,
	reply_to_comment?: number,
	sticker_id?: number,
	access_key?: string,
	guid?: string
	}, callback?: Function): void;
photos_deleteComment (params: {
	owner_id?: number,
	comment_id: number
	}, callback?: Function): void;
photos_restoreComment (params: {
	owner_id?: number,
	comment_id: number
	}, callback?: Function): void;
photos_editComment (params: {
	owner_id?: number,
	comment_id: number,
	message?: string,
	attachments?: string
	}, callback?: Function): void;
photos_getTags (params: {
	owner_id?: number,
	photo_id: number,
	access_key?: string
	}, callback?: Function): void;
photos_putTag (params: {
	owner_id?: number,
	photo_id: number,
	user_id: number,
	x?: number,
	y?: number,
	x2?: number,
	y2?: number
	}, callback?: Function): void;
photos_removeTag (params: {
	owner_id?: number,
	photo_id: number,
	tag_id: number
	}, callback?: Function): void;
photos_getNewTags (params: {
	offset?: number,
	count?: number
	}, callback?: Function): void;
wall_getById (params: {
	posts: string,
	extended?: 0 | 1,
	copy_history_depth?: number,
	fields?: string
	}, callback?: Function): void;
wall_post (params: {
	owner_id?: number,
	friends_only?: 0 | 1,
	from_group?: 0 | 1,
	message?: string,
	attachments?: string,
	services?: string,
	signed?: 0 | 1,
	publish_date?: number,
	lat?: number,
	long?: number,
	place_id?: number,
	post_id?: number,
	guid?: string,
	mark_as_ads?: 0 | 1
	}, callback?: Function): void;
wall_repost (params: {
	object: string,
	message?: string,
	group_id?: number,
	mark_as_ads?: 0 | 1
	}, callback?: Function): void;
wall_getReposts (params: {
	owner_id?: number,
	post_id?: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
wall_edit (params: {
	owner_id?: number,
	post_id: number,
	friends_only?: 0 | 1,
	message?: string,
	attachments?: string,
	services?: string,
	signed?: 0 | 1,
	publish_date?: number,
	lat?: number,
	long?: number,
	place_id?: number,
	mark_as_ads?: 0 | 1
	}, callback?: Function): void;
wall_delete (params: {
	owner_id?: number,
	post_id?: number
	}, callback?: Function): void;
wall_restore (params: {
	owner_id?: number,
	post_id?: number
	}, callback?: Function): void;
wall_pin (params: {
	owner_id?: number,
	post_id: number
	}, callback?: Function): void;
wall_unpin (params: {
	owner_id?: number,
	post_id: number
	}, callback?: Function): void;
wall_getComments (params: {
	owner_id?: number,
	post_id: number,
	need_likes?: 0 | 1,
	start_comment_id?: number,
	offset?: number,
	count?: number,
	sort?: string,
	preview_length?: number,
	extended?: 0 | 1
	}, callback?: Function): void;
wall_createComment (params: {
	owner_id?: number,
	post_id: number,
	from_group?: 0 | 1,
	message?: string,
	reply_to_comment?: number,
	attachments?: string,
	sticker_id?: number,
	guid?: string
	}, callback?: Function): void;
wall_editComment (params: {
	owner_id?: number,
	comment_id: number,
	message?: string,
	attachments?: string
	}, callback?: Function): void;
wall_deleteComment (params: {
	owner_id?: number,
	comment_id: number
	}, callback?: Function): void;
wall_restoreComment (params: {
	owner_id?: number,
	comment_id: number
	}, callback?: Function): void;
wall_reportPost (params: {
	owner_id: number,
	post_id: number,
	reason?: number
	}, callback?: Function): void;
wall_reportComment (params: {
	owner_id: number,
	comment_id: number,
	reason?: number
	}, callback?: Function): void;
status_get (params: {
	user_id?: number,
	group_id?: number
	}, callback?: Function): void;
status_set (params: {
	text?: string,
	group_id?: number
	}, callback?: Function): void;
audio_get (params: {
	owner_id?: number,
	album_id?: number,
	audio_ids?: string,
	need_user?: 0 | 1,
	offset?: number,
	count?: number
	}, callback?: Function): void;
audio_getById (params: {
	audios: string
	}, callback?: Function): void;
audio_getLyrics (params: {
	lyrics_id: number
	}, callback?: Function): void;
audio_search (params: {
	q?: string,
	auto_complete?: 0 | 1,
	lyrics?: 0 | 1,
	performer_only?: 0 | 1,
	sort?: number,
	search_own?: 0 | 1,
	offset?: number,
	count?: number
	}, callback?: Function): void;
audio_getUploadServer (params: any, callback?: Function): void;
audio_save (params: {
	server: number,
	audio: string,
	hash?: string,
	artist?: string,
	title?: string
	}, callback?: Function): void;
audio_add (params: {
	audio_id: number,
	owner_id: number,
	group_id?: number,
	album_id?: number
	}, callback?: Function): void;
audio_delete (params: {
	audio_id: number,
	owner_id: number
	}, callback?: Function): void;
audio_edit (params: {
	owner_id: number,
	audio_id: number,
	artist?: string,
	title?: string,
	text?: string,
	genre_id?: number,
	no_search?: 0 | 1
	}, callback?: Function): void;
audio_reorder (params: {
	audio_id: number,
	owner_id?: number,
	before?: number,
	after?: number
	}, callback?: Function): void;
audio_restore (params: {
	audio_id: number,
	owner_id?: number
	}, callback?: Function): void;
audio_getAlbums (params: {
	owner_id?: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
audio_addAlbum (params: {
	group_id?: number,
	title: string
	}, callback?: Function): void;
audio_editAlbum (params: {
	group_id?: number,
	album_id: number,
	title: string
	}, callback?: Function): void;
audio_deleteAlbum (params: {
	group_id?: number,
	album_id: number
	}, callback?: Function): void;
audio_moveToAlbum (params: {
	group_id?: number,
	album_id?: number,
	audio_ids: string
	}, callback?: Function): void;
audio_setBroadcast (params: {
	audio?: string,
	target_ids?: string
	}, callback?: Function): void;
audio_getBroadcastList (params: {
	filter?: string,
	active?: 0 | 1
	}, callback?: Function): void;
audio_getRecommendations (params: {
	target_audio?: string,
	user_id?: number,
	offset?: number,
	count?: number,
	shuffle?: 0 | 1
	}, callback?: Function): void;
audio_getPopular (params: {
	only_eng?: 0 | 1,
	genre_id?: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
audio_getCount (params: {
	owner_id: number
	}, callback?: Function): void;
leads_complete (params: {
	vk_sid: string,
	secret: string,
	comment?: string
	}, callback?: Function): void;
leads_start (params: {
	lead_id: number,
	secret: string
	}, callback?: Function): void;
leads_getStats (params: {
	lead_id: number,
	secret?: string,
	date_start?: string,
	date_end?: string
	}, callback?: Function): void;
leads_getUsers (params: {
	offer_id: number,
	secret: string,
	offset?: number,
	count?: number,
	status?: number,
	reverse?: 0 | 1
	}, callback?: Function): void;
leads_checkUser (params: {
	lead_id: number,
	test_result?: number,
	age?: number,
	country?: string
	}, callback?: Function): void;
leads_metricHit (params: {
	data: string
	}, callback?: Function): void;
pages_get (params: {
	owner_id?: number,
	page_id?: number,
	global?: 0 | 1,
	site_preview?: 0 | 1,
	title?: string,
	need_source?: 0 | 1,
	need_html?: 0 | 1
	}, callback?: Function): void;
pages_save (params: {
	text?: string,
	page_id?: number,
	group_id?: number,
	user_id?: number,
	title?: string
	}, callback?: Function): void;
pages_saveAccess (params: {
	page_id: number,
	group_id?: number,
	user_id?: number,
	view?: number,
	edit?: number
	}, callback?: Function): void;
pages_getHistory (params: {
	page_id: number,
	group_id?: number,
	user_id?: number
	}, callback?: Function): void;
pages_getTitles (params: {
	group_id?: number
	}, callback?: Function): void;
pages_getVersion (params: {
	version_id: number,
	group_id?: number,
	user_id?: number,
	need_html?: 0 | 1
	}, callback?: Function): void;
pages_parseWiki (params: {
	text: string,
	group_id?: number
	}, callback?: Function): void;
pages_clearCache (params: {
	url: string
	}, callback?: Function): void;
groups_isMember (params: {
	group_id: string,
	user_id?: number,
	user_ids?: string,
	extended?: 0 | 1
	}, callback?: Function): void;
groups_getById (params: {
	group_ids?: string,
	group_id?: string,
	fields?: string
	}, callback?: Function): void;
groups_get (params: {
	user_id?: number,
	extended?: 0 | 1,
	filter?: string,
	fields?: string,
	offset?: number,
	count?: number
	}, callback?: Function): void;
groups_getMembers (params: {
	group_id?: string,
	sort?: string,
	offset?: number,
	count?: number,
	fields?: string,
	filter?: string
	}, callback?: Function): void;
groups_join (params: {
	group_id?: number,
	not_sure?: string
	}, callback?: Function): void;
groups_leave (params: {
	group_id: number
	}, callback?: Function): void;
groups_search (params: {
	q: string,
	type?: string,
	country_id?: number,
	city_id?: number,
	future?: 0 | 1,
	market?: 0 | 1,
	sort?: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
groups_getCatalog (params: {
	category_id?: number,
	subcategory_id?: number
	}, callback?: Function): void;
groups_getCatalogInfo (params: {
	
	}, callback?: Function): void;
groups_getInvites (params: {
	offset?: number,
	count?: number,
	extended?: 0 | 1
	}, callback?: Function): void;
groups_getInvitedUsers (params: {
	group_id: number,
	offset?: number,
	count?: number,
	fields?: string,
	name_case?: string
	}, callback?: Function): void;
groups_banUser (params: {
	group_id: number,
	user_id: number,
	end_date?: number,
	reason?: number,
	comment?: string,
	comment_visible?: 0 | 1
	}, callback?: Function): void;
groups_unbanUser (params: {
	group_id: number,
	user_id: number
	}, callback?: Function): void;
groups_getBanned (params: {
	group_id: number,
	offset?: number,
	count?: number,
	fields?: string,
	user_id?: number
	}, callback?: Function): void;
groups_create (params: {
	title: string,
	description?: string,
	type?: string,
	public_category?: number,
	subtype?: number
	}, callback?: Function): void;
groups_edit (params: {
	group_id: number,
	title?: string,
	description?: string,
	screen_name?: string,
	access?: number,
	website?: string,
	subject?: string,
	email?: string,
	phone?: string,
	rss?: string,
	event_start_date?: number,
	event_finish_date?: number,
	event_group_id?: number,
	public_category?: number,
	public_subcategory?: number,
	public_date?: string,
	wall?: number,
	topics?: number,
	photos?: number,
	video?: number,
	audio?: number,
	links?: 0 | 1,
	events?: 0 | 1,
	places?: 0 | 1,
	contacts?: 0 | 1,
	docs?: number,
	wiki?: number,
	messages?: 0 | 1,
	age_limits?: number,
	market?: 0 | 1,
	market_comments?: 0 | 1,
	market_country?: string,
	market_city?: string,
	market_currency?: number,
	market_contact?: number,
	market_wiki?: number,
	obscene_filter?: 0 | 1,
	obscene_stopwords?: 0 | 1,
	obscene_words?: string
	}, callback?: Function): void;
groups_editPlace (params: {
	group_id: number,
	title?: string,
	address?: string,
	country_id?: number,
	city_id?: number,
	latitude?: number,
	longitude?: number
	}, callback?: Function): void;
groups_getSettings (params: {
	group_id: number
	}, callback?: Function): void;
groups_getRequests (params: {
	group_id: number,
	offset?: number,
	count?: number,
	fields?: string
	}, callback?: Function): void;
groups_editManager (params: {
	group_id: number,
	user_id: number,
	role?: string,
	is_contact?: 0 | 1,
	contact_position?: string,
	contact_phone?: string,
	contact_email?: string
	}, callback?: Function): void;
groups_invite (params: {
	group_id: number,
	user_id: number
	}, callback?: Function): void;
groups_addLink (params: {
	group_id: number,
	link: string,
	text?: string
	}, callback?: Function): void;
groups_deleteLink (params: {
	group_id: number,
	link_id: number
	}, callback?: Function): void;
groups_editLink (params: {
	group_id: number,
	link_id: number,
	text?: string
	}, callback?: Function): void;
groups_reorderLink (params: {
	group_id: number,
	link_id: number,
	after?: number
	}, callback?: Function): void;
groups_removeUser (params: {
	group_id: number,
	user_id: number
	}, callback?: Function): void;
groups_approveRequest (params: {
	group_id: number,
	user_id: number
	}, callback?: Function): void;
groups_getCallbackConfirmationCode (params: {
	group_id: number
	}, callback?: Function): void;
groups_getCallbackServerSettings (params: {
	group_id: number
	}, callback?: Function): void;
groups_getCallbackSettings (params: {
	group_id: number
	}, callback?: Function): void;
groups_setCallbackServer (params: {
	group_id: number,
	server_url?: string
	}, callback?: Function): void;
groups_setCallbackServerSettings (params: {
	group_id: number,
	secret_key?: string
	}, callback?: Function): void;
groups_setCallbackSettings (params: {
	group_id: number,
	message_new?: 0 | 1,
	message_allow?: 0 | 1,
	message_deny?: 0 | 1,
	photo_new?: 0 | 1,
	audio_new?: 0 | 1,
	video_new?: 0 | 1,
	wall_reply_new?: 0 | 1,
	wall_reply_edit?: 0 | 1,
	wall_post_new?: 0 | 1,
	board_post_new?: 0 | 1,
	board_post_edit?: 0 | 1,
	board_post_restore?: 0 | 1,
	board_post_delete?: 0 | 1,
	photo_comment_new?: 0 | 1,
	video_comment_new?: 0 | 1,
	market_comment_new?: 0 | 1,
	group_join?: 0 | 1,
	group_leave?: 0 | 1
	}, callback?: Function): void;
board_getTopics (params: {
	group_id: number,
	topic_ids?: string,
	order?: number,
	offset?: number,
	count?: number,
	extended?: 0 | 1,
	preview?: number,
	preview_length?: number
	}, callback?: Function): void;
board_getComments (params: {
	group_id: number,
	topic_id: number,
	need_likes?: 0 | 1,
	start_comment_id?: number,
	offset?: number,
	count?: number,
	extended?: 0 | 1,
	sort?: string
	}, callback?: Function): void;
board_addTopic (params: {
	group_id: number,
	title: string,
	text?: string,
	from_group?: 0 | 1,
	attachments?: string
	}, callback?: Function): void;
board_createComment (params: {
	group_id: number,
	topic_id: number,
	message?: string,
	attachments?: string,
	from_group?: 0 | 1,
	sticker_id?: number,
	guid?: string
	}, callback?: Function): void;
board_deleteTopic (params: {
	group_id: number,
	topic_id: number
	}, callback?: Function): void;
board_editTopic (params: {
	group_id: number,
	topic_id: number,
	title: string
	}, callback?: Function): void;
board_editComment (params: {
	group_id: number,
	topic_id: number,
	comment_id: number,
	message?: string,
	attachments?: string
	}, callback?: Function): void;
board_restoreComment (params: {
	group_id: number,
	topic_id: number,
	comment_id: number
	}, callback?: Function): void;
board_deleteComment (params: {
	group_id: number,
	topic_id: number,
	comment_id: number
	}, callback?: Function): void;
board_openTopic (params: {
	group_id: number,
	topic_id: number
	}, callback?: Function): void;
board_closeTopic (params: {
	group_id: number,
	topic_id: number
	}, callback?: Function): void;
board_fixTopic (params: {
	group_id: number,
	topic_id: number
	}, callback?: Function): void;
board_unfixTopic (params: {
	group_id: number,
	topic_id: number
	}, callback?: Function): void;
video_get (params: {
	owner_id?: number,
	videos?: string,
	album_id?: number,
	count?: number,
	offset?: number,
	extended?: 0 | 1
	}, callback?: Function): void;
video_edit (params: {
	owner_id?: number,
	video_id: number,
	name?: string,
	desc?: string,
	privacy_view?: string,
	privacy_comment?: string,
	no_comments?: 0 | 1,
	repeat?: 0 | 1
	}, callback?: Function): void;
video_add (params: {
	target_id?: number,
	video_id: number,
	owner_id: number
	}, callback?: Function): void;
video_save (params: {
	name?: string,
	description?: string,
	is_private?: 0 | 1,
	wallpost?: 0 | 1,
	link?: string,
	group_id?: number,
	album_id?: number,
	privacy_view?: string,
	privacy_comment?: string,
	no_comments?: 0 | 1,
	repeat?: 0 | 1
	}, callback?: Function): void;
video_delete (params: {
	video_id: number,
	owner_id?: number,
	target_id?: number
	}, callback?: Function): void;
video_restore (params: {
	video_id: number,
	owner_id?: number
	}, callback?: Function): void;
video_search (params: {
	q: string,
	sort?: number,
	hd?: number,
	adult?: 0 | 1,
	filters?: string,
	search_own?: 0 | 1,
	offset?: number,
	longer?: number,
	shorter?: number,
	count?: number
	}, callback?: Function): void;
video_getUserVideos (params: {
	user_id?: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
video_getAlbums (params: {
	owner_id?: number,
	offset?: number,
	count?: number,
	extended?: 0 | 1
	}, callback?: Function): void;
video_getAlbumById (params: {
	owner_id?: number,
	album_id: number
	}, callback?: Function): void;
video_addAlbum (params: {
	group_id?: number,
	title?: string,
	privacy?: string
	}, callback?: Function): void;
video_editAlbum (params: {
	group_id?: number,
	album_id: number,
	title: string,
	privacy?: string
	}, callback?: Function): void;
video_deleteAlbum (params: {
	group_id?: number,
	album_id: number
	}, callback?: Function): void;
video_reorderAlbums (params: {
	owner_id?: number,
	album_id: number,
	before?: number,
	after?: number
	}, callback?: Function): void;
video_reorderVideos (params: {
	target_id?: number,
	album_id?: number,
	owner_id: number,
	video_id: number,
	before_owner_id?: number,
	before_video_id?: number,
	after_owner_id?: number,
	after_video_id?: number
	}, callback?: Function): void;
video_addToAlbum (params: {
	target_id?: number,
	album_id?: number,
	album_ids?: string,
	owner_id: number,
	video_id: number
	}, callback?: Function): void;
video_removeFromAlbum (params: {
	target_id?: number,
	album_id?: number,
	album_ids?: string,
	owner_id: number,
	video_id: number
	}, callback?: Function): void;
video_getAlbumsByVideo (params: {
	target_id?: number,
	owner_id: number,
	video_id: number
	}, callback?: Function): void;
video_getComments (params: {
	owner_id?: number,
	video_id: number,
	need_likes?: 0 | 1,
	start_comment_id?: number,
	offset?: number,
	count?: number,
	sort?: string,
	extended?: 0 | 1
	}, callback?: Function): void;
video_createComment (params: {
	owner_id?: number,
	video_id: number,
	message?: string,
	attachments?: string,
	from_group?: 0 | 1,
	reply_to_comment?: number,
	sticker_id?: number,
	guid?: string
	}, callback?: Function): void;
video_deleteComment (params: {
	owner_id?: number,
	comment_id: number
	}, callback?: Function): void;
video_restoreComment (params: {
	owner_id?: number,
	comment_id: number
	}, callback?: Function): void;
video_editComment (params: {
	owner_id?: number,
	comment_id: number,
	message?: string,
	attachments?: string
	}, callback?: Function): void;
video_getTags (params: {
	owner_id?: number,
	video_id: number
	}, callback?: Function): void;
video_putTag (params: {
	user_id: number,
	owner_id?: number,
	video_id: number,
	tagged_name?: string
	}, callback?: Function): void;
video_removeTag (params: {
	tag_id: number,
	owner_id?: number,
	video_id: number
	}, callback?: Function): void;
video_getNewTags (params: {
	offset?: number,
	count?: number
	}, callback?: Function): void;
video_report (params: {
	owner_id: number,
	video_id: number,
	reason?: number,
	comment?: string,
	search_query?: string
	}, callback?: Function): void;
video_reportComment (params: {
	owner_id: number,
	comment_id: number,
	reason?: number
	}, callback?: Function): void;
video_getCatalog (params: {
	count?: number,
	items_count?: number,
	from?: string,
	filters?: string
	}, callback?: Function): void;
video_getCatalogSection (params: {
	section_id: string,
	from: string,
	count?: number
	}, callback?: Function): void;
video_hideCatalogSection (params: {
	section_id: number
	}, callback?: Function): void;
notes_get (params: {
	note_ids?: string,
	user_id?: number,
	count?: number
	}, callback?: Function): void;
notes_getById (params: {
	note_id: number,
	owner_id?: number
	}, callback?: Function): void;
notes_add (params: {
	title: string,
	text: string,
	privacy_view?: string,
	privacy_comment?: string
	}, callback?: Function): void;
notes_edit (params: {
	note_id: number,
	title: string,
	text: string,
	privacy_view?: string,
	privacy_comment?: string
	}, callback?: Function): void;
notes_delete (params: {
	note_id: number
	}, callback?: Function): void;
notes_getComments (params: {
	note_id: number,
	owner_id?: number,
	count?: number
	}, callback?: Function): void;
notes_createComment (params: {
	note_id: number,
	owner_id?: number,
	reply_to?: number,
	message: string,
	guid?: string
	}, callback?: Function): void;
notes_editComment (params: {
	comment_id: number,
	owner_id?: number,
	message?: string
	}, callback?: Function): void;
notes_deleteComment (params: {
	comment_id: number,
	owner_id?: number
	}, callback?: Function): void;
notes_restoreComment (params: {
	comment_id: number,
	owner_id?: number
	}, callback?: Function): void;
places_add (params: {
	type?: number,
	title: string,
	latitude: number,
	longitude: number,
	country?: number,
	city?: number,
	address?: string
	}, callback?: Function): void;
places_getById (params: {
	places: string
	}, callback?: Function): void;
places_search (params: {
	q?: string,
	city?: number,
	latitude: number,
	longitude: number,
	radius?: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
places_checkin (params: {
	place_id?: number,
	text?: string,
	latitude?: number,
	longitude?: number,
	friends_only?: 0 | 1,
	services?: string
	}, callback?: Function): void;
places_getCheckins (params: {
	latitude?: number,
	longitude?: number,
	place?: number,
	user_id?: number,
	offset?: number,
	count?: number,
	timestamp?: number,
	friends_only?: 0 | 1,
	need_places?: 0 | 1
	}, callback?: Function): void;
places_getTypes (params: any, callback?: Function): void;
account_getCounters (params: {
	filter?: string
	}, callback?: Function): void;
account_setNameInMenu (params: {
	user_id: number,
	name?: string
	}, callback?: Function): void;
account_setOnline (params: {
	voip?: 0 | 1
	}, callback?: Function): void;
account_setOffline (params: any, callback?: Function): void;
account_lookupContacts (params: {
	contacts?: string,
	service: string,
	mycontact?: string,
	return_all?: 0 | 1,
	fields?: string
	}, callback?: Function): void;
account_registerDevice (params: {
	token: string,
	device_model?: string,
	device_year?: number,
	device_id: string,
	system_version?: string,
	settings?: string
	}, callback?: Function): void;
account_unregisterDevice (params: {
	device_id?: string
	}, callback?: Function): void;
account_setSilenceMode (params: {
	device_id?: string,
	time?: number,
	peer_id?: number,
	sound?: number
	}, callback?: Function): void;
account_getPushSettings (params: {
	device_id?: string
	}, callback?: Function): void;
account_setPushSettings (params: {
	device_id: string,
	settings?: string,
	key?: string,
	value?: string
	}, callback?: Function): void;
account_getAppPermissions (params: {
	user_id: number
	}, callback?: Function): void;
account_getActiveOffers (params: {
	count?: number
	}, callback?: Function): void;
account_banUser (params: {
	user_id: number
	}, callback?: Function): void;
account_unbanUser (params: {
	user_id: number
	}, callback?: Function): void;
account_getBanned (params: {
	offset?: number,
	count?: number
	}, callback?: Function): void;
account_getInfo (params: {
	fields?: string
	}, callback?: Function): void;
account_setInfo (params: {
	name?: string,
	value?: string
	}, callback?: Function): void;
account_changePassword (params: {
	restore_sid?: string,
	change_password_hash?: string,
	old_password?: string,
	new_password: string
	}, callback?: Function): void;
account_getProfileInfo (params: any, callback?: Function): void;
account_saveProfileInfo (params: {
	first_name?: string,
	last_name?: string,
	maiden_name?: string,
	screen_name?: string,
	cancel_request_id?: number,
	sex?: number,
	relation?: number,
	relation_partner_id?: number,
	bdate?: string,
	bdate_visibility?: number,
	home_town?: string,
	country_id?: number,
	city_id?: number,
	status?: string
	}, callback?: Function): void;
messages_get (params: {
	out?: 0 | 1,
	offset?: number,
	count?: number,
	time_offset?: number,
	preview_length?: number,
	last_message_id?: number
	}, callback?: Function): void;
messages_getDialogs (params: {
	offset?: number,
	count?: number,
	start_message_id?: number,
	preview_length?: number,
	unread?: 0 | 1
	}, callback?: Function): void;
messages_getById (params: {
	message_ids: string
	}, callback?: Function): void;
messages_search (params: {
	q?: string,
	peer_id?: number,
	date?: number,
	count?: number
	}, callback?: Function): void;
messages_getHistory (params: {
	offset?: number,
	count?: number,
	user_id?: string,
	peer_id?: number,
	start_message_id?: number,
	rev?: number
	}, callback?: Function): void;
messages_getHistoryAttachments (params: {
	peer_id: number,
	media_type?: string,
	start_from?: string,
	count?: number,
	photo_sizes?: 0 | 1,
	fields?: string
	}, callback?: Function): void;
messages_send (params: {
	user_id?: number,
	random_id?: number,
	peer_id?: number,
	domain?: string,
	chat_id?: number,
	user_ids?: string,
	message?: string,
	lat?: number,
	long?: number,
	attachment?: string,
	forward_messages?: string,
	sticker_id?: number,
	notification?: 0 | 1
	}, callback?: Function): void;
messages_delete (params: {
	message_ids?: string,
	spam?: 0 | 1
	}, callback?: Function): void;
messages_deleteDialog (params: {
	user_id?: string,
	peer_id?: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
messages_restore (params: {
	message_id: number
	}, callback?: Function): void;
messages_markAsRead (params: {
	message_ids?: string,
	peer_id?: string,
	start_message_id?: number
	}, callback?: Function): void;
messages_markAsImportant (params: {
	message_ids?: string,
	important?: number
	}, callback?: Function): void;
messages_getLongPollServer (params: {
	use_ssl?: 0 | 1,
	need_pts?: 0 | 1
	}, callback?: Function): void;
messages_getLongPollHistory (params: {
	ts?: number,
	pts?: number,
	preview_length?: number,
	onlines?: 0 | 1,
	fields?: string,
	events_limit?: number,
	msgs_limit?: number,
	max_msg_id?: number
	}, callback?: Function): void;
messages_getChat (params: {
	chat_id?: number,
	chat_ids?: string,
	fields?: string,
	name_case?: string
	}, callback?: Function): void;
messages_createChat (params: {
	user_ids: string,
	title?: string
	}, callback?: Function): void;
messages_editChat (params: {
	chat_id: number,
	title: string
	}, callback?: Function): void;
messages_getChatUsers (params: {
	chat_id?: number,
	chat_ids?: string,
	fields?: string,
	name_case?: string
	}, callback?: Function): void;
messages_setActivity (params: {
	user_id?: string,
	type?: string,
	peer_id?: number
	}, callback?: Function): void;
messages_searchDialogs (params: {
	q?: string,
	limit?: number,
	fields?: string
	}, callback?: Function): void;
messages_addChatUser (params: {
	chat_id: number,
	user_id: number
	}, callback?: Function): void;
messages_removeChatUser (params: {
	chat_id: number,
	user_id: string
	}, callback?: Function): void;
messages_getLastActivity (params: {
	user_id: number
	}, callback?: Function): void;
messages_setChatPhoto (params: {
	file: string
	}, callback?: Function): void;
messages_deleteChatPhoto (params: {
	chat_id: number
	}, callback?: Function): void;
messages_denyMessagesFromCommunity (params: {
	group_id: number
	}, callback?: Function): void;
messages_allowMessagesFromCommunity (params: {
	group_id: number
	}, callback?: Function): void;
messages_isMessagesFromGroupAllowed (params: {
	group_id: number,
	user_id: number
	}, callback?: Function): void;
newsfeed_get (params: {
	filters?: string,
	return_banned?: 0 | 1,
	start_time?: number,
	end_time?: number,
	max_photos?: number,
	source_ids?: string,
	start_from?: string,
	count?: number,
	fields?: string
	}, callback?: Function): void;
newsfeed_getRecommended (params: {
	start_time?: number,
	end_time?: number,
	max_photos?: number,
	start_from?: string,
	count?: number,
	fields?: string
	}, callback?: Function): void;
newsfeed_getComments (params: {
	count?: number,
	filters?: string,
	reposts?: string,
	start_time?: number,
	end_time?: number,
	start_from?: string,
	fields?: string
	}, callback?: Function): void;
newsfeed_getMentions (params: {
	owner_id?: number,
	start_time?: number,
	end_time?: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
newsfeed_getBanned (params: {
	extended?: 0 | 1,
	fields?: string,
	name_case?: string
	}, callback?: Function): void;
newsfeed_addBan (params: {
	user_ids?: string,
	group_ids?: string
	}, callback?: Function): void;
newsfeed_deleteBan (params: {
	user_ids?: string,
	group_ids?: string
	}, callback?: Function): void;
newsfeed_ignoreItem (params: {
	type: string,
	owner_id: number,
	item_id: number
	}, callback?: Function): void;
newsfeed_unignoreItem (params: {
	type: string,
	owner_id: number,
	item_id: number
	}, callback?: Function): void;
newsfeed_search (params: {
	q?: string,
	extended?: 0 | 1,
	count?: number,
	latitude?: number,
	longitude?: number,
	start_time?: number,
	end_time?: number,
	start_from?: string,
	fields?: string
	}, callback?: Function): void;
newsfeed_getLists (params: {
	list_ids?: string
	}, callback?: Function): void;
newsfeed_saveList (params: {
	list_id?: number,
	title: string,
	source_ids?: string,
	no_reposts?: 0 | 1
	}, callback?: Function): void;
newsfeed_deleteList (params: {
	list_id: number
	}, callback?: Function): void;
newsfeed_unsubscribe (params: {
	type: string,
	owner_id?: number,
	item_id: number
	}, callback?: Function): void;
newsfeed_getSuggestedSources (params: {
	offset?: number,
	count?: number,
	shuffle?: 0 | 1,
	fields?: string
	}, callback?: Function): void;
likes_getList (params: {
	type: string,
	owner_id?: number,
	item_id?: number,
	page_url?: string,
	filter?: string,
	friends_only?: 0 | 1,
	extended?: 0 | 1,
	offset?: number,
	count?: number,
	skip_own?: 0 | 1
	}, callback?: Function): void;
likes_add (params: {
	type: string,
	owner_id?: number,
	item_id: number,
	access_key?: string
	}, callback?: Function): void;
likes_delete (params: {
	type: string,
	owner_id?: number,
	item_id: number
	}, callback?: Function): void;
likes_isLiked (params: {
	user_id?: number,
	type: string,
	owner_id?: number,
	item_id: number
	}, callback?: Function): void;
polls_getById (params: {
	owner_id?: number,
	is_board?: 0 | 1,
	poll_id: number
	}, callback?: Function): void;
polls_addVote (params: {
	owner_id?: number,
	poll_id: number,
	answer_id: number,
	is_board?: 0 | 1
	}, callback?: Function): void;
polls_deleteVote (params: {
	owner_id?: number,
	poll_id: number,
	answer_id: number,
	is_board?: 0 | 1
	}, callback?: Function): void;
polls_getVoters (params: {
	owner_id?: number,
	poll_id: number,
	answer_ids: string,
	is_board?: 0 | 1,
	friends_only?: 0 | 1,
	offset?: number,
	count?: number,
	fields?: string,
	name_case?: string
	}, callback?: Function): void;
polls_create (params: {
	question?: string,
	is_anonymous?: 0 | 1,
	owner_id?: number,
	add_answers?: string
	}, callback?: Function): void;
polls_edit (params: {
	owner_id: number,
	poll_id: number,
	question?: string,
	add_answers?: string,
	edit_answers?: string,
	delete_answers?: string
	}, callback?: Function): void;
docs_get (params: {
	count?: number,
	offset?: number,
	owner_id?: number
	}, callback?: Function): void;
docs_getById (params: {
	docs: string
	}, callback?: Function): void;
docs_getUploadServer (params: {
	group_id?: number
	}, callback?: Function): void;
docs_getWallUploadServer (params: {
	group_id?: number
	}, callback?: Function): void;
docs_save (params: {
	file: string,
	title?: string,
	tags?: string
	}, callback?: Function): void;
docs_delete (params: {
	owner_id: number,
	doc_id: number
	}, callback?: Function): void;
docs_add (params: {
	owner_id: number,
	doc_id: number,
	access_key?: string
	}, callback?: Function): void;
docs_getTypes (params: {
	owner_id: number
	}, callback?: Function): void;
docs_search (params: {
	q: string,
	count?: number,
	offset?: number
	}, callback?: Function): void;
docs_edit (params: {
	owner_id: number,
	doc_id: number,
	title?: string,
	tags?: string
	}, callback?: Function): void;
fave_getUsers (params: {
	offset?: number,
	count?: number
	}, callback?: Function): void;
fave_getPhotos (params: {
	offset?: number,
	count?: number,
	photo_sizes?: 0 | 1
	}, callback?: Function): void;
fave_getPosts (params: {
	offset?: number,
	count?: number,
	extended?: 0 | 1
	}, callback?: Function): void;
fave_getVideos (params: {
	offset?: number,
	count?: number,
	extended?: 0 | 1
	}, callback?: Function): void;
fave_getLinks (params: {
	offset?: number,
	count?: number
	}, callback?: Function): void;
fave_getMarketItems (params: {
	count?: number,
	extended?: 0 | 1
	}, callback?: Function): void;
fave_addUser (params: {
	user_id: number
	}, callback?: Function): void;
fave_removeUser (params: {
	user_id: number
	}, callback?: Function): void;
fave_addGroup (params: {
	group_id: number
	}, callback?: Function): void;
fave_removeGroup (params: {
	group_id: number
	}, callback?: Function): void;
fave_addLink (params: {
	link: string,
	text?: string
	}, callback?: Function): void;
fave_removeLink (params: {
	link_id: string
	}, callback?: Function): void;
notifications_get (params: {
	count?: number,
	start_from?: string,
	filters?: string,
	start_time?: number,
	end_time?: number
	}, callback?: Function): void;
notifications_markAsViewed (params: any, callback?: Function): void;
stats_get (params: {
	group_id?: number,
	app_id?: number,
	date_from?: string,
	date_to?: string
	}, callback?: Function): void;
stats_trackVisitor (params: {
	
	}, callback?: Function): void;
stats_getPostReach (params: {
	owner_id: number,
	post_id: number
	}, callback?: Function): void;
search_getHints (params: {
	q?: string,
	limit?: number,
	filters?: string,
	search_global?: 0 | 1
	}, callback?: Function): void;
apps_getCatalog (params: {
	sort?: string,
	offset?: number,
	count: number,
	platform?: string,
	extended?: 0 | 1,
	return_friends?: 0 | 1,
	fields?: string,
	name_case?: string,
	q?: string,
	genre_id?: number,
	filter?: string
	}, callback?: Function): void;
apps_get (params: {
	app_id?: number,
	app_ids?: string,
	platform?: string,
	fields?: string,
	name_case?: string
	}, callback?: Function): void;
apps_sendRequest (params: {
	user_id: number,
	text?: string,
	type?: string,
	name?: string,
	key?: string,
	separate?: 0 | 1
	}, callback?: Function): void;
apps_deleteAppRequests (params: any, callback?: Function): void;
apps_getFriendsList (params: {
	count?: number,
	type?: string,
	fields?: string
	}, callback?: Function): void;
apps_getLeaderboard (params: {
	type: string,
	global?: 0 | 1
	}, callback?: Function): void;
secure_addAppEvent (params: {
	user_id: number,
	activity_id: number,
	value?: number
	}, callback?: Function): void;
apps_getScore (params: {
	user_id: number
	}, callback?: Function): void;
utils_checkLink (params: {
	url: string
	}, callback?: Function): void;
utils_resolveScreenName (params: {
	screen_name: string
	}, callback?: Function): void;
utils_getServerTime (params: any, callback?: Function): void;
database_getCountries (params: {
	need_all?: 0 | 1,
	code?: string,
	offset?: number,
	count?: number
	}, callback?: Function): void;
database_getRegions (params: {
	country_id: number,
	q?: string,
	offset?: number,
	count?: number
	}, callback?: Function): void;
database_getStreetsById (params: {
	street_ids: string
	}, callback?: Function): void;
database_getCountriesById (params: {
	country_ids?: string
	}, callback?: Function): void;
database_getCities (params: {
	country_id: number,
	region_id?: number,
	q?: string,
	need_all?: 0 | 1,
	offset?: number,
	count?: number
	}, callback?: Function): void;
database_getCitiesById (params: {
	city_ids?: string
	}, callback?: Function): void;
database_getUniversities (params: {
	q?: string,
	country_id?: number,
	city_id?: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
database_getSchools (params: {
	q?: string,
	city_id: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
database_getSchoolClasses (params: {
	country_id?: number
	}, callback?: Function): void;
database_getFaculties (params: {
	university_id: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
database_getChairs (params: {
	faculty_id: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
gifts_get (params: {
	user_id?: number,
	count?: number,
	offset?: number
	}, callback?: Function): void;
ads_getAccounts (params: any, callback?: Function): void;
ads_getClients (params: {
	account_id: number
	}, callback?: Function): void;
ads_createClients (params: {
	account_id: number,
	data: string
	}, callback?: Function): void;
ads_updateClients (params: {
	account_id: number,
	data: string
	}, callback?: Function): void;
ads_deleteClients (params: {
	account_id: number,
	ids: string
	}, callback?: Function): void;
ads_getCampaigns (params: {
	account_id: number,
	client_id?: number,
	include_deleted?: 0 | 1,
	campaign_ids?: string
	}, callback?: Function): void;
ads_createCampaigns (params: {
	account_id: number,
	data: string
	}, callback?: Function): void;
ads_updateCampaigns (params: {
	account_id: number,
	data: string
	}, callback?: Function): void;
ads_deleteCampaigns (params: {
	account_id: number,
	ids: string
	}, callback?: Function): void;
ads_getAds (params: {
	account_id: number,
	client_id?: number,
	include_deleted?: 0 | 1,
	campaign_ids?: string,
	ad_ids?: string,
	limit?: number,
	offset?: number
	}, callback?: Function): void;
ads_getAdsLayout (params: {
	account_id: number,
	client_id?: number,
	include_deleted?: 0 | 1,
	campaign_ids?: string,
	ad_ids?: string,
	limit?: number,
	offset?: number
	}, callback?: Function): void;
ads_getAdsTargeting (params: {
	account_id: number,
	client_id?: number,
	include_deleted?: 0 | 1,
	campaign_ids?: string,
	ad_ids?: string,
	limit?: number,
	offset?: number
	}, callback?: Function): void;
ads_createAds (params: {
	account_id: number,
	data: string
	}, callback?: Function): void;
ads_updateAds (params: {
	account_id: number,
	data: string
	}, callback?: Function): void;
ads_deleteAds (params: {
	account_id: number,
	ids: string
	}, callback?: Function): void;
ads_checkLink (params: {
	account_id: number,
	link_type: string,
	link_url: string,
	campaign_id?: number
	}, callback?: Function): void;
ads_getStatistics (params: {
	account_id: number,
	ids_type: string,
	ids: string,
	period: string,
	date_from: string,
	date_to: string
	}, callback?: Function): void;
ads_getDemographics (params: {
	account_id: number,
	ids_type: string,
	ids: string,
	period: string,
	date_from: string,
	date_to: string
	}, callback?: Function): void;
ads_getAdsPostsReach (params: {
	account_id: number,
	ads_ids: string
	}, callback?: Function): void;
ads_getBudget (params: {
	account_id: number
	}, callback?: Function): void;
ads_getOfficeUsers (params: {
	account_id: number
	}, callback?: Function): void;
ads_addOfficeUsers (params: {
	account_id: number,
	data: string
	}, callback?: Function): void;
ads_removeOfficeUsers (params: {
	account_id: number,
	ids: string
	}, callback?: Function): void;
ads_getTargetingStats (params: {
	account_id: number,
	criteria?: string,
	ad_id?: number,
	ad_format?: number,
	ad_platform?: string,
	link_url: string,
	link_domain?: string
	}, callback?: Function): void;
ads_getSuggestions (params: {
	section: string,
	ids?: string,
	q?: string,
	country?: number,
	cities?: string,
	lang?: string
	}, callback?: Function): void;
ads_getCategories (params: {
	lang?: string
	}, callback?: Function): void;
ads_getUploadURL (params: {
	ad_format: number
	}, callback?: Function): void;
ads_getVideoUploadURL (params: any, callback?: Function): void;
ads_getFloodStats (params: {
	account_id: number
	}, callback?: Function): void;
ads_getRejectionReason (params: {
	account_id: number,
	ad_id: number
	}, callback?: Function): void;
ads_createTargetGroup (params: {
	account_id: number,
	client_id?: number,
	name: string,
	domain?: string,
	lifetime?: number
	}, callback?: Function): void;
ads_updateTargetGroup (params: {
	account_id: number,
	client_id?: number,
	target_group_id: number,
	name: string,
	domain?: string,
	lifetime?: number
	}, callback?: Function): void;
ads_deleteTargetGroup (params: {
	account_id: number,
	client_id?: number,
	target_group_id: number
	}, callback?: Function): void;
ads_getTargetGroups (params: {
	account_id: number,
	client_id?: number,
	extended?: 0 | 1
	}, callback?: Function): void;
ads_importTargetContacts (params: {
	account_id: number,
	client_id?: number,
	target_group_id: number,
	contacts: string
	}, callback?: Function): void;
secure_checkToken (params: {
	token?: string,
	ip?: string
	}, callback?: Function): void;
market_get (params: {
	owner_id: number,
	count?: number,
	offset?: number,
	extended?: 0 | 1
	}, callback?: Function): void;
market_getById (params: {
	item_ids: string,
	extended?: 0 | 1
	}, callback?: Function): void;
market_search (params: {
	owner_id: number,
	q?: string,
	price_from?: number,
	price_to?: number,
	tags?: string,
	rev?: number,
	offset?: number,
	count?: number,
	extended?: 0 | 1
	}, callback?: Function): void;
market_getAlbums (params: {
	owner_id: number,
	offset?: number,
	count?: number
	}, callback?: Function): void;
market_getAlbumById (params: {
	owner_id: number,
	album_ids: string
	}, callback?: Function): void;
market_createComment (params: {
	owner_id: number,
	item_id: number,
	message?: string,
	attachments?: string,
	from_group?: 0 | 1,
	reply_to_comment?: number,
	sticker_id?: number,
	guid?: string
	}, callback?: Function): void;
market_getComments (params: {
	owner_id: number,
	item_id: number,
	need_likes?: 0 | 1,
	start_comment_id?: number,
	count?: number,
	sort?: string,
	extended?: 0 | 1,
	fields?: string
	}, callback?: Function): void;
market_deleteComment (params: {
	owner_id: number,
	comment_id: number
	}, callback?: Function): void;
market_restoreComment (params: {
	owner_id: number,
	comment_id: number
	}, callback?: Function): void;
market_editComment (params: {
	owner_id: number,
	comment_id: number,
	message?: string,
	attachments?: string
	}, callback?: Function): void;
market_reportComment (params: {
	owner_id: number,
	comment_id: number,
	reason: number
	}, callback?: Function): void;
market_getCategories (params: {
	count?: number,
	offset?: number
	}, callback?: Function): void;
market_report (params: {
	owner_id: number,
	item_id: number,
	reason: number
	}, callback?: Function): void;
market_add (params: {
	owner_id: number,
	name: string,
	description: string,
	category_id: number,
	price: number,
	deleted?: 0 | 1,
	main_photo_id: number,
	photo_ids?: string
	}, callback?: Function): void;
market_edit (params: {
	owner_id: number,
	item_id: number,
	name: string,
	description: string,
	category_id: number,
	price: number,
	deleted?: 0 | 1,
	main_photo_id: number,
	photo_ids?: string
	}, callback?: Function): void;
market_delete (params: {
	owner_id: number,
	item_id: number
	}, callback?: Function): void;
market_restore (params: {
	owner_id: number,
	item_id: number
	}, callback?: Function): void;
market_reorderItems (params: {
	owner_id: number,
	album_id?: number,
	item_id: number,
	before?: number,
	after?: number
	}, callback?: Function): void;
market_reorderAlbums (params: {
	owner_id: number,
	album_id: number,
	before?: number,
	after?: number
	}, callback?: Function): void;
market_addAlbum (params: {
	owner_id: number,
	title: string,
	photo_id?: number,
	main_album?: 0 | 1
	}, callback?: Function): void;
market_editAlbum (params: {
	owner_id: number,
	album_id: number,
	title: string,
	photo_id?: number,
	main_album?: 0 | 1
	}, callback?: Function): void;
market_deleteAlbum (params: {
	owner_id: number,
	album_id: number
	}, callback?: Function): void;
market_removeFromAlbum (params: {
	owner_id: number,
	item_id: number,
	album_ids: string
	}, callback?: Function): void;
market_addToAlbum (params: {
	owner_id: number,
	item_id: number,
	album_ids: string
	}, callback?: Function): void;

	Modules: VkModules;

	showPortlet(opts: any): void;

	Widgets: VkWidgets;

}

declare var VK: VkStatic;
