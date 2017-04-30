@extends('layouts.app')

@section('setup')
    <script>
    const user = {!! Auth::user() !!};
    const csrf_token = "{{ csrf_token() }}";
    </script>
@stop
