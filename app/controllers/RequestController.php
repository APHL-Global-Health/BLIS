<?php

class RequestController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$requests = Request::all();
		return View::make('inventory.request.index')->with('requests', $requests);
	}
	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		$items = Item::lists('name', 'id');
		$testCategories = TestCategory::lists('name', 'id');
		return View::make('inventory.request.create')
			->with('testCategories', $testCategories)
			->with('items', $items);
	}
	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$rules = array(
			'item_id' => 'required',
			'test_category_id' => 'required',
			'quantity_ordered' => 'required'
		);
		$validator = Validator::make(Input::all(), $rules);
		// process the login
		if ($validator->fails()) {
		return Redirect::route('inventory.request.index')->withErrors($validator);
		} else {
			// store
			$request = new Request;
			$request->item_id = Input::get('commodity');
			$request->test_category_id = Input::get('test_category_id');
			$request->quantity_ordered = Input::get('quantity_ordered');
			$request->remarks = Input::get('remarks');
			$request->user_id = Auth::user()->id;
			try{
				$request->save();
				$url = Session::get('SOURCE_URL');
            
            	return Redirect::to($url)
					->with('message', trans('messages.record-successfully-saved')) ->with('activerequest', $request ->id);
			}catch(QueryException $e){
				Log::error($e);
			}
		}
	}
	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//show a request
		$request =Request::find($id);
		//show the view and pass the $request to it
		return View::make('inventory.request.show')->with('request', $request);
	}
	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$request = Request::find($id);
		$items = Item::lists('name', 'id');
		$item = $request->item_id;
		$testCategories = TestCategory::lists('name', 'id');
		$testCategory = $request->test_category_id;
		return View::make('inventory.request.edit')
			->with('testCategories', $testCategories)
			->with('items', $items)
			->with('item', $item)
			->with('testCategory', $testCategory);
	}
	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$rules = array(
			'commodity' => 'required',
			'quantity_ordered' => 'required',
			'test_category_id' => 'required'
		);
		// Update
		$request = Request::find($id);
		$request->item_id = Input::get('commodity');
		$request->test_category_id = Input::get('test_category_id');
		$request->quantity_ordered = Input::get('quantity_ordered');
		$request->remarks = Input::get('remarks');
		$request->user_id = Auth::user()->id;
		try
		{
			$request->save();
			$url = Session::get('SOURCE_URL');
        
        	return Redirect::to($url)
				->with('message', trans('messages.record-successfully-updated')) ->with('activerequest', $request ->id);
		}catch(QueryException $e){
			Log::error($e);
		}
	}
	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function delete($id)
	{
		//Soft delete the request
		$request = Request::find($id);
		$request->delete();
		// redirect
		return Redirect::route('inventory.request.index')->with('message', trans('messages.record-successfully-deleted'));
	}
}
