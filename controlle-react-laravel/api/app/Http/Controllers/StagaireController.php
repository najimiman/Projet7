<?php

namespace App\Http\Controllers;

use App\Models\Stagaire;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StagaireController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($nmpr)
    {
        $search = DB::table('stagaires')
                ->where('Nom', 'like', '%' . $nmpr . '%')
                ->orWhere('Prenom', 'like', '%'.$nmpr.'%')
                ->get();
                if($search->count()>=1){
                    return response()->json(['Result' => "si existe"]);
                }
                else{
                    return response()->json(['Result' => "n'extest pas"]);
                }
                
    }
    public function index2($nmpr){
        $search = DB::table('stagaires')
                ->where('Nom', 'like', '%' . $nmpr . '%')
                ->orWhere('Prenom', 'like', '%'.$nmpr.'%')
                ->get();
                // if($search->count()>=1){
                //     return $search;
                //     // return Response()->json($search);
                // }
                // else{
                //     return response()->json(['Result' => "n'extest pas"]);
                // }
                return $search;
    }
    public function index3(){
        $all = Stagaire::all();
                return $all;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $student=Stagaire::findOrFail($id);
        return $student;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
