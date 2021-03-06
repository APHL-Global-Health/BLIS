@extends("layout")
@section("content")
<div>
	<ol class="breadcrumb">
	  <li><a href="{{{URL::route('user.home')}}}">{{ trans('messages.home') }}</a></li>
	  <li class="active">{{ Lang::choice('messages.report',2) }}</li>
	  <li class="active">{{ trans('messages.supply-report') }}</li>
	</ol>
</div>

{{ Form::open(array('route' => array('reports.inventory'), 'class' => 'form-inline', 'role' => 'form')) }}
	{{ Form::hidden('search_item_id', '', array('id' => 'search_item_id')) }}

<div class='container-fluid'>
	<div class="row">
		<div class="col-md-3"><!-- From Datepicker-->
	    	<div class="row">
				<div class="col-md-4">
					{{ Form::label('start', trans("messages.from")) }}
				</div>
				<div class="col-md-8">
					{{ Form::text('start', isset($input['start'])?$input['start']:date('Y-m-d'), 
				        array('class' => 'form-control standard-datepicker')) }}
			    </div>
	    	</div><!-- /.row -->
	    </div>
	    <div class="col-md-3"><!-- To Datepicker-->
	    	<div class="row">
				<div class="col-md-4">
			    	{{ Form::label('end', trans("messages.to")) }}
			    </div>
				<div class="col-md-8">
				    {{ Form::text('end', isset($input['end'])?$input['end']:date('Y-m-d'), 
				        array('class' => 'form-control standard-datepicker')) }}
		        </div>
	    	</div>
	    </div>	   
	    <div class="col-md-4"><!-- Select type of item -->
	    	<div class="row">
		        <div class="col-md-4">
		        	{{ Form::label('item', Lang::choice('messages.item',1)) }}
		        </div>
		        <div class="col-md-8">
		             {{ Form::text('search_item', '', array('class' => 'form-control', 'id' => 'search_item', 'placeholder' => 'Search Item'))}}
		        </div>
	        </div>
	    </div> 
	    <div class="col-md-2"> <!--View Button -->
		    		{{ Form::button("<span class='glyphicon glyphicon-filter'></span> ".trans('messages.view'),
		    		array('class' => 'btn btn-info', 'id' => 'filter', 'type' => 'submit')) }}
		     	</div>  
    </div><!-- /.row -->  
</div><!-- /.container-fluid -->

{{ Form::close() }}

<br/>

<div class="panel panel-primary">

	<div class="panel-heading ">
		<span class="glyphicon glyphicon-notes"></span>
		{{ trans('messages.supply-report') }}
	</div>

	<div class="panel-body">
		@if (Session::has('message'))
			<div class="alert alert-info">{{ trans(Session::get('message')) }}</div>
		@endif	

		<div class="table-responsive">
			<table class="table table-striped table-hover table-condensed search-table">
				
					<thead>
						<tr>
							<th>No.</th>							
							<th>{{Lang::choice('messages.item',1)}}</th>
							<th>{{Lang::choice('messages.lot-number',1)}}</th>
							<th>{{Lang::choice('messages.batch-no',1)}}</th>
							<th>{{Lang::choice('messages.supplier',1)}}</th>
							<th>{{Lang::choice('messages.manufacturer',1)}}</th>
							<th>{{Lang::choice('messages.ordered',1)}}</th>
							<th>{{Lang::choice('messages.supplied',1)}}</th>
							<th>Date Supplied</th>
							<th>{{Lang::choice('messages.cost-per-unit',1)}}</th>
							<th>{{Lang::choice('messages.expiry',1)}}</th>							
						</tr>
					</thead>
					<tbody>
						<?php $i = 1; 
						if (!empty($supplyData)){?>
						@foreach($supplyData as $row)
						<tr>
							<td>{{$i++}}</td>							
							<td>{{Item::find($row->item_id)->name}}</td>
							<td>{{$row->lot}}</td>
							<td>{{$row->batch_no}}</td>
							<td>{{Supplier::find($row->supplier_id)->name}}</td>
							<td>{{$row->manufacturer}}</td>
							<td>{{$row->quantity_ordered}}</td>
							<td>{{$row->quantity_supplied}}</td>
							<td>{{$row->date_of_reception}}</td>
							<td>{{$row->cost_per_unit}}</td>
							<td>{{$row->expiry_date}}</td>
						@endforeach

						<?php } else {?>
							<tr>
								<td>{{Lang::choice('messages.no-data-found',1)}}</td>
							</tr>
						
							<?php } ?>
					</tbody>

				

			</table>
		</div><!--/.table-responsive -->
	</div>
</div><!--/.panel -->

@stop