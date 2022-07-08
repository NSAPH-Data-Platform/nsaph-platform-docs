Search.setIndex({docnames:["LICENSE","README","doc/DataLoader","doc/Datamodels","doc/ProjectLoader","doc/SampleQuery","doc/TerritorialCodes","doc/UserRequests","doc/members/adi","doc/members/analyze","doc/members/common","doc/members/create","doc/members/cwl_collect_outputs","doc/members/data_loader","doc/members/db","doc/members/domain","doc/members/ds","doc/members/executors","doc/members/fips","doc/members/hdf5_export","doc/members/index","doc/members/index_builder","doc/members/ingest","doc/members/inserter","doc/members/introspector","doc/members/link_gis","doc/members/loader_config","doc/members/log_viewer","doc/members/md","doc/members/model","doc/members/monitor","doc/members/nc_loader","doc/members/net","doc/members/pg_json_dump","doc/members/pg_keywords","doc/members/project_loader","doc/members/query","doc/members/resources","doc/members/sas_explorer","doc/members/shapes","doc/members/ssa2fips","doc/members/utils","doc/members/vacuum","doc/members/zip2fips","index","src/airflow/README"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["LICENSE.md","README.md","doc/DataLoader.md","doc/Datamodels.md","doc/ProjectLoader.md","doc/SampleQuery.md","doc/TerritorialCodes.md","doc/UserRequests.md","doc/members/adi.rst","doc/members/analyze.rst","doc/members/common.rst","doc/members/create.rst","doc/members/cwl_collect_outputs.rst","doc/members/data_loader.rst","doc/members/db.rst","doc/members/domain.rst","doc/members/ds.rst","doc/members/executors.rst","doc/members/fips.rst","doc/members/hdf5_export.rst","doc/members/index.rst","doc/members/index_builder.rst","doc/members/ingest.rst","doc/members/inserter.rst","doc/members/introspector.rst","doc/members/link_gis.rst","doc/members/loader_config.rst","doc/members/log_viewer.rst","doc/members/md.rst","doc/members/model.rst","doc/members/monitor.rst","doc/members/nc_loader.rst","doc/members/net.rst","doc/members/pg_json_dump.rst","doc/members/pg_keywords.rst","doc/members/project_loader.rst","doc/members/query.rst","doc/members/resources.rst","doc/members/sas_explorer.rst","doc/members/shapes.rst","doc/members/ssa2fips.rst","doc/members/utils.rst","doc/members/vacuum.rst","doc/members/zip2fips.rst","index.rst","src/airflow/README.md"],objects:{"nsaph.adi":{add_gis_columns:[8,1,1,""]},"nsaph.data_model":{domain:[15,0,0,"-"],inserter:[23,0,0,"-"],model:[29,0,0,"-"],utils:[41,0,0,"-"]},"nsaph.data_model.domain":{Domain:[15,2,1,""]},"nsaph.data_model.domain.Domain":{CREATE:[15,3,1,""],add_fk_validation:[15,4,1,""],add_index:[15,4,1,""],append_ddl:[15,4,1,""],column_spec:[15,4,1,""],create:[15,4,1,""],create_object_from:[15,4,1,""],create_table:[15,4,1,""],create_true_table:[15,4,1,""],ddl_for_node:[15,4,1,""],drop:[15,4,1,""],extract_generation_code:[15,4,1,""],find:[15,4,1,""],find_dependent:[15,4,1,""],find_mapped_column_name:[15,4,1,""],fqn:[15,4,1,""],get:[15,4,1,""],get_column_type:[15,4,1,""],get_columns:[15,4,1,""],get_index_ddl:[15,4,1,""],get_select_from:[15,4,1,""],has:[15,4,1,""],has_column_spec:[15,4,1,""],has_hard_linked_children:[15,4,1,""],init:[15,4,1,""],is_array:[15,4,1,""],is_column_wildcard:[15,4,1,""],is_generated:[15,4,1,""],list_columns:[15,4,1,""],list_identifiers:[15,4,1,""],list_source_columns:[15,4,1,""],matches:[15,4,1,""],need_index:[15,4,1,""],parse_wildcard_column_spec:[15,4,1,""],set_sloppy:[15,4,1,""],skip:[15,4,1,""],spillover_table:[15,4,1,""],view_column_joined:[15,4,1,""],view_column_spec:[15,4,1,""]},"nsaph.data_model.inserter":{Inserter:[23,2,1,""],compute:[23,1,1,""]},"nsaph.data_model.inserter.Inserter":{Batch:[23,4,1,""],Table:[23,4,1,""],drilldown:[23,4,1,""],get_autocommit:[23,4,1,""],get_cumulative_timing:[23,4,1,""],get_thread_timing:[23,4,1,""],get_timestamp:[23,4,1,""],get_timings:[23,4,1,""],import_file:[23,4,1,""],log_progress:[23,4,1,""],prepare:[23,4,1,""],push:[23,4,1,""],read_batch:[23,4,1,""],reset_timer:[23,4,1,""],stamp_time:[23,4,1,""],timer:[23,4,1,""]},"nsaph.data_model.model":{CustomColumn:[29,2,1,""],Table:[29,2,1,""],csv_reader:[29,1,1,""],index_method:[29,1,1,""],load_range:[29,1,1,""],unquote:[29,1,1,""]},"nsaph.data_model.model.CustomColumn":{extract_value:[29,4,1,""]},"nsaph.data_model.model.Table":{add_column:[29,4,1,""],add_data:[29,4,1,""],analyze:[29,4,1,""],build_indices:[29,4,1,""],copy_data:[29,4,1,""],create:[29,4,1,""],drop:[29,4,1,""],fopen:[29,4,1,""],get_index_ddl:[29,4,1,""],guess_types:[29,4,1,""],log_progress:[29,4,1,""],make_column:[29,4,1,""],make_fips_column:[29,4,1,""],make_int_column:[29,4,1,""],make_iso_column:[29,4,1,""],parse_fips12:[29,4,1,""],save:[29,4,1,""],type_from_metadata:[29,4,1,""]},"nsaph.data_model.model.Table.make_iso_column.params":{anchor:[29,5,1,""],cursor:[29,5,1,""],include:[29,5,1,""]},"nsaph.data_model.utils":{CSVLikeJsonReader:[41,2,1,""],DataReader:[41,2,1,""],basename:[41,1,1,""],entry_to_path:[41,1,1,""],regex:[41,1,1,""],split:[41,1,1,""]},"nsaph.data_model.utils.CSVLikeJsonReader":{close:[41,4,1,""],open:[41,4,1,""]},"nsaph.data_model.utils.DataReader":{get_path:[41,4,1,""],open_csv:[41,4,1,""],open_fst:[41,4,1,""],open_fwf:[41,4,1,""],open_json:[41,4,1,""],open_sas7bdat:[41,4,1,""],rows:[41,4,1,""]},"nsaph.data_model.utils.basename.params":{table:[41,5,1,""]},"nsaph.data_model.utils.split.params":{node:[41,5,1,""]},"nsaph.db":{Connection:[14,2,1,""],ResultSetDeprecated:[14,2,1,""],test_connection:[14,1,1,""]},"nsaph.db.Connection":{close:[14,4,1,""],connect:[14,4,1,""],connect_to_database:[14,4,1,""],connect_via_tunnel:[14,4,1,""],default_filename:[14,3,1,""],default_port:[14,4,1,""],default_section:[14,3,1,""],get_database_types:[14,4,1,""],host_name:[14,4,1,""],read_config:[14,4,1,""],resolve_host:[14,4,1,""]},"nsaph.db.ResultSetDeprecated":{SIZE:[14,3,1,""]},"nsaph.index":{build_indices:[20,1,1,""],index:[20,1,1,""]},"nsaph.link_gis":{add_gis_columns:[25,1,1,""]},"nsaph.loader":{common:[13,0,0,"-"],data_loader:[13,0,0,"-"],index_builder:[21,0,0,"-"],introspector:[24,0,0,"-"],loader_config:[26,0,0,"-"],monitor:[30,0,0,"-"],project_loader:[35,0,0,"-"],vacuum:[42,0,0,"-"]},"nsaph.loader.common":{CommonConfig:[13,2,1,""],DBConnectionConfig:[13,2,1,""],DBTableConfig:[13,2,1,""]},"nsaph.loader.common.CommonConfig":{domain:[13,3,1,""],registry:[13,3,1,""]},"nsaph.loader.common.CommonConfig.params":{description:[13,5,1,""],subclass:[13,5,1,""]},"nsaph.loader.common.DBConnectionConfig":{autocommit:[13,3,1,""],connection:[13,3,1,""],db:[13,3,1,""],dryrun:[13,3,1,""],verbose:[13,3,1,""]},"nsaph.loader.common.DBConnectionConfig.params":{description:[13,5,1,""],subclass:[13,5,1,""]},"nsaph.loader.common.DBTableConfig":{table:[13,3,1,""]},"nsaph.loader.common.DBTableConfig.params":{description:[13,5,1,""],subclass:[13,5,1,""]},"nsaph.loader.data_loader":{DataLoader:[13,2,1,""]},"nsaph.loader.data_loader.DataLoader":{close:[13,4,1,""],commit:[13,4,1,""],drop:[13,4,1,""],get_connection:[13,4,1,""],get_connections:[13,4,1,""],get_files:[13,4,1,""],has_been_ingested:[13,4,1,""],import_data_from_file:[13,4,1,""],is_parallel:[13,4,1,""],load:[13,4,1,""],print_ddl:[13,4,1,""],print_table_ddl:[13,4,1,""],reset:[13,4,1,""],rollback:[13,4,1,""],run:[13,4,1,""],set_table:[13,4,1,""]},"nsaph.loader.index_builder":{IndexBuilder:[21,2,1,""],IndexerConfig:[21,2,1,""],find_name:[21,1,1,""]},"nsaph.loader.index_builder.IndexBuilder":{build:[21,4,1,""],drop:[21,4,1,""],drop_all:[21,4,1,""],execute:[21,4,1,""],print_stat:[21,4,1,""],run:[21,4,1,""]},"nsaph.loader.index_builder.IndexerConfig.params":{description:[21,5,1,""],subclass:[21,5,1,""]},"nsaph.loader.introspector":{InconsistentTypes:[24,6,1,""],Introspector:[24,2,1,""],test:[24,1,1,""]},"nsaph.loader.introspector.Introspector":{append_file_column:[24,4,1,""],append_record_column:[24,4,1,""],append_sql_column:[24,4,1,""],classify:[24,4,1,""],csv_reader:[24,4,1,""],db_type:[24,4,1,""],fopen:[24,4,1,""],get_columns:[24,4,1,""],guess_str:[24,4,1,""],guess_types:[24,4,1,""],handle_csv:[24,4,1,""],handle_json:[24,4,1,""],handle_sas:[24,4,1,""],introspect:[24,4,1,""],load_csv:[24,4,1,""],load_fst:[24,4,1,""],load_json:[24,4,1,""],load_range:[24,4,1,""],load_sas:[24,4,1,""],name:[24,4,1,""],reconcile:[24,4,1,""],sas2db_type:[24,4,1,""],unquote:[24,4,1,""]},"nsaph.loader.loader_config":{LoaderConfig:[26,2,1,""],Parallelization:[26,2,1,""]},"nsaph.loader.loader_config.LoaderConfig":{buffer:[26,3,1,""],data:[26,3,1,""],drop:[26,3,1,""],incremental:[26,3,1,""],limit:[26,3,1,""],log:[26,3,1,""],page:[26,3,1,""],parallelization:[26,3,1,""],pattern:[26,3,1,""],reset:[26,3,1,""],sloppy:[26,3,1,""],threads:[26,3,1,""],validate:[26,4,1,""]},"nsaph.loader.loader_config.LoaderConfig.params":{description:[26,5,1,""],subclass:[26,5,1,""]},"nsaph.loader.loader_config.LoaderConfig.validate.params":{attr:[26,5,1,""],value:[26,5,1,""]},"nsaph.loader.loader_config.Parallelization":{files:[26,3,1,""],lines:[26,3,1,""],none:[26,3,1,""]},"nsaph.loader.monitor":{Activity:[30,2,1,""],DBActivityMonitor:[30,2,1,""]},"nsaph.loader.monitor.DBActivityMonitor":{get_activity:[30,4,1,""],get_indexing_progress:[30,4,1,""],run:[30,4,1,""]},"nsaph.loader.project_loader":{ProjectLoader:[35,2,1,""],is_relative_to:[35,1,1,""]},"nsaph.loader.project_loader.ProjectLoader":{introspect:[35,4,1,""],new_domain:[35,4,1,""],run:[35,4,1,""],save_registry:[35,4,1,""]},"nsaph.loader.project_loader.ProjectLoader.params":{context:[35,5,1,""]},"nsaph.loader.vacuum":{Vacuum:[42,2,1,""],find_name:[42,1,1,""]},"nsaph.loader.vacuum.Vacuum":{log_activity:[42,4,1,""],run:[42,4,1,""]},"nsaph.requests":{query:[36,0,0,"-"]},"nsaph.requests.query":{Query:[36,2,1,""],all_tables:[36,1,1,""],collect_tables:[36,1,1,""],find_tables:[36,1,1,""],fqn:[36,1,1,""],generate:[36,1,1,""],generate_from:[36,1,1,""],generate_order_by:[36,1,1,""],generate_select:[36,1,1,""],generate_where:[36,1,1,""],reduce_tables:[36,1,1,""]},"nsaph.requests.query.Query":{execute:[36,4,1,""],prepare:[36,4,1,""]},"nsaph.util":{cwl_collect_outputs:[12,0,0,"-"],executors:[17,0,0,"-"],net:[32,0,0,"-"],pg_json_dump:[33,0,0,"-"],resources:[37,0,0,"-"],sas_explorer:[38,0,0,"-"],shapes:[39,0,0,"-"],ssa2fips:[40,0,0,"-"],zip2fips:[43,0,0,"-"]},"nsaph.util.cwl_collect_outputs":{collect:[12,1,1,""]},"nsaph.util.executors":{BlockingThreadPoolExecutor:[17,2,1,""],thread_initializer:[17,1,1,""]},"nsaph.util.executors.BlockingThreadPoolExecutor":{submit:[17,4,1,""],wait:[17,4,1,""],wait_for_completion:[17,4,1,""]},"nsaph.util.net":{get_hostname_as_localhost:[32,1,1,""]},"nsaph.util.pg_json_dump":{"export":[33,1,1,""],add_state_fips:[33,1,1,""],dump:[33,1,1,""],ensure:[33,1,1,""],flush:[33,1,1,""],fqn:[33,1,1,""],import_table:[33,1,1,""],quote:[33,1,1,""],result_set:[33,1,1,""],show:[33,1,1,""]},"nsaph.util.resources":{get_resource_dir:[37,1,1,""],get_resources:[37,1,1,""],name2path:[37,1,1,""]},"nsaph.util.sas_explorer":{info:[38,1,1,""],simulate:[38,1,1,""]},"nsaph.util.shapes":{install:[39,1,1,""]},"nsaph.util.ssa2fips":{SSA2FIPS:[40,2,1,""],SSAFile:[40,2,1,""]},"nsaph.util.ssa2fips.SSA2FIPS":{meta:[40,3,1,""],print:[40,4,1,""],read:[40,4,1,""],store:[40,4,1,""],y:[40,3,1,""],years:[40,3,1,""]},"nsaph.util.ssa2fips.SSAFile":{read:[40,4,1,""],set_year:[40,4,1,""],values:[40,4,1,""]},"nsaph.util.zip2fips":{Zip2FipsCrossWalk:[43,2,1,""]},"nsaph.util.zip2fips.Zip2FipsCrossWalk":{download:[43,4,1,""],m2q:[43,3,1,""],save:[43,4,1,""],table:[43,3,1,""],url_pattern:[43,3,1,""]},nsaph:{adi:[8,0,0,"-"],db:[14,0,0,"-"],fips:[18,0,0,"-"],index:[20,0,0,"-"],link_gis:[25,0,0,"-"],pg_keywords:[34,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","parameter","Python parameter"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:parameter","6":"py:exception"},terms:{"0":[0,3,23],"013696":3,"03":43,"06":43,"09":43,"1":[0,1,2,3,4,43],"10":30,"100":38,"1000":[3,18,23],"10000":14,"1000000":23,"12":43,"13":1,"2":[0,1,3,18,29,43],"2003":40,"2004":0,"2011":40,"2012":40,"2013":40,"2014":40,"2015":40,"2016":40,"2017":40,"2018":40,"2021":0,"3":[0,3,17,30,43],"3166":29,"32":30,"4":[0,5,43],"5":0,"50":0,"6":0,"7":0,"8":[0,5],"9":0,"abstract":[1,10,13],"boolean":3,"char":29,"class":[1,3,10,13,14,17,21,23,24,26,29,30,35,36,40,41,42,43],"default":[2,3,4,10,13,23],"do":[0,1,3,4,5,7,10,13,26],"export":[1,7,33],"float":23,"function":[1,3,4,35,41,44],"import":[0,1,17],"int":[3,6,14,17,23,24,29,30,40,43],"long":1,"new":[10,13,17,21,26,29],"public":[5,6,18,43],"return":[6,13,17,26,29,35,41],"static":[14,15,23,24,29],"true":[3,6,24,29,33,35],"try":5,"while":0,A:[0,1,3,7,10,13,17,21,26,30,45],AND:0,AS:[0,18],At:3,BY:18,By:3,FOR:0,For:[0,1,3,4,35],IS:0,If:[0,3,7,10,13,21,26],In:[0,1,4,6,7,35],It:[1,3,5,7,13],Its:1,Not:0,OF:0,OR:0,On:4,The:[0,1,3,4,5,45],Then:7,There:3,To:[3,4,5],_:[1,3,4,5,6,10,13,17,21,26,35],__doc__:4,_blockingthreadpoolexecutor__fn:17,_ps_:[2,3,4,13,26],abl:1,about:30,abov:[0,6],accept:[0,3,17],accomod:1,accompani:1,act:0,action:[3,15],activ:[5,30],actual:[1,7],ad:5,add:[0,29],add_column:29,add_data:29,add_fk_valid:15,add_gis_column:[8,25],add_index:15,add_state_fip:33,addendum:0,addit:[0,29],administr:6,admission_d:3,admsn_dt:3,advanc:4,advis:0,after:[1,41],against:0,aggreg:3,agre:0,agreement:0,airflow:1,aka:[13,26],all:[0,1,3,4,6,35],all_tabl:36,alleg:0,alon:0,along:0,alongsid:0,alreadi:[1,2,3,4,13,26],also:[1,2,3,4,13,26],alwai:3,amount:17,an:[0,1,2,3,4,5,7,10,13,17,26,41],analyz:[29,42],anchor:29,ani:[0,2,3,4,5,13,17,26,35,41],annot:0,anoth:[1,3,7,35],apach:0,api:[1,44],app_name_postfix:14,appear:0,append_ddl:15,append_file_column:24,append_record_column:24,append_sql_column:24,appendix:0,appli:0,applic:0,appropri:[0,1,7],ar:[0,1,3,4,5,6,17,35],archiv:[2,3,4,10,13,26],arg:[17,23],argpars:[13,26],argument:[2,3,4,10,13,17,21,26,35],aris:0,around:1,arrai:41,assert:0,associ:[0,41],assum:[0,1,3,13,26],attach:0,attent:5,attr:[13,26],attribut:0,audit:3,augment:1,author:0,authorship:0,auto:3,autocommit:[2,3,4,10,13],automat:3,aux:36,auxiliari:1,avail:[0,6,13,26],b:0,base:[0,3,4,7,10,13,35,41],basenam:41,basi:0,basic:7,batch:23,becaus:1,been:[0,2,3,4,13,26],befor:[1,5],behalf:0,behaviour:3,being:[4,35],below:[0,1,5],benefici:0,besid:[1,3],between:[1,3,44],bin:5,bind:0,block:17,blockingthreadpoolexecutor:17,bool:[6,13,14,15,26,29,36],both:[1,5,13],bound:[1,17],bracket:3,branch:1,brief:1,btree:3,buffer:[2,3,4,13,26],buffer_s:41,build:[1,3,7,21],build_indic:[20,29],builder:[1,21],built:[1,2,4,10,13],bureau:6,c:[0,29],calcul:29,call:[3,4,17],callabl:[13,17],can:[1,2,3,4,5,6,7,13,17,26,35],cannot:[0,7],capac:17,carri:0,caus:[0,17],cell_typ:24,censu:[3,5],certain:[3,4,15,35],cfg:45,chang:0,charact:[0,10,13,21,26],charg:0,child:3,children:3,choos:0,cid:3,citi:29,claim:0,classifi:24,classmethod:[14,15,21,24,35],climat:[5,7],close:[13,14,41],cnxn:21,code:[0,1,3,29,44],collect:12,collect_t:36,column1:15,column:[7,13,15,24,26,29,36,40,41,44],column_name_replac:[24,29],column_spec:15,column_typ:24,columnar:[1,24],com:[5,29],combin:[0,6],command:[1,3,5,13,26,35,42,44,45],commerci:0,commit:[2,3,4,13,26],common:[0,13,30,40,42],commonconfig:[10,13,42],commonwl:1,commun:0,compar:5,compil:0,compli:0,complianc:0,compon:1,comput:[0,23,44],concept:1,concret:[10,13,21,26],concurr:17,concurrent_indic:29,conda:1,condit:0,config:4,configur:[0,1,10,21,26,35,44],conn:33,connect:[2,3,4,10,13,14,15,21,23,33,36,44],connect_to_databas:14,connect_via_tunnel:14,connxn:42,consequenti:0,consider:44,consist:[0,3,41],conspicu:0,constitut:0,constru:0,construct:[4,35],contain:[0,1,2,3,4,7,10,13,17,21,26,35,41],content:[0,1],context:[13,21,23,30,35,40,42],contract:0,contribut:0,contributor:0,contributori:0,control:0,conveni:1,convent:3,convers:0,convert:[1,2,3,4,13,26],copi:[0,5],copy_data:29,copyright:0,core:[5,43],correctli:5,corrector:33,correspond:1,corrupt:3,cost:5,counterclaim:0,counti:[1,3,6,40],county_fip:18,crate:[4,35],creat:[1,3,4,6,10,13,15,21,26,29,35,44],create_object_from:15,create_stat:15,create_t:15,create_true_t:15,creation:[1,13],cross:0,crosswalk:[3,6],crude:7,csv:[1,2,3,4,13,26,35,41],csv_reader:[24,29],csvlikejsonread:41,curli:3,current:[1,3,7,30],cursor:[14,20,29,33],custom:[13,26],customari:0,customcolumn:29,cwl:1,d:[0,3],dai:7,damag:0,danger:17,dashboard:1,data:[4,5,7,10,13,15,17,24,26,29,35],data_fil:[13,24,29],data_load:2,data_model:[1,3,8,20,23,25],databas:[2,4,6,10,13,14,17,26,29,35,44],datafram:43,dataload:13,dataread:[1,23,41],dataset:[1,43],datasourc:1,date:[0,3,7],datetim:[3,30],db:[1,2,3,4,8,10,13,20,25],db_type:24,dbactivitymonitor:30,dbconnectionconfig:[10,13,30,40],dbm:[1,5],dbmss:1,dbtableconfig:[10,13],ddl:[1,6,13,15,44],ddl_for_nod:15,decid:5,declar:5,dedic:15,default_filenam:14,default_port:14,default_sect:14,defend:0,defin:[0,1,3,5,7,10,13,21,26],definit:[0,1,2,3,4,10,13,15,41,44],deliber:0,delimit:41,denot:3,depart:6,depend:1,deploi:1,deploy:1,deprec:1,deriv:0,describ:[0,3,5,7],descript:[3,4,10,13,21,26],design:0,dest:39,detail:[1,3],determin:[0,7],determinist:3,develop:[1,6],dialect:3,dict:[14,15,24,29,30,33,36,37,41],dictionari:3,did:5,differ:[0,1,3,44],direct:[0,6],directli:3,directori:[1,2,3,5,10,13,26,35,44],disclaim:0,discuss:0,dispatch:[1,7],displai:0,distribut:0,doc:[1,10,13,17,21,26],document:[0,1,3,5,7,10,13,21,26],doe:0,domain:[1,2,4,10,13,21,23,26,44],done:5,dot:41,download:[6,43],downstream:1,drilldown:23,drop:[4,13,15,21,26,29],drop_al:21,dry:[10,13,44],dryrun:[4,10,13],dump:[1,33],duplic:3,dure:[1,3],e:[2,3,4,6,7,13,26,35],each:[0,3,4,5,7,35],easi:1,easili:5,econom:6,editori:0,edu:[0,5],either:[0,3,13,26],elabor:0,electron:0,encount:3,end:0,ensur:[5,33],entiti:0,entri:[3,24,29,35,41],entry_to_path:41,enumer:[13,26],environ:[1,44],epa:3,error:[1,7,17],etc:[3,4,7,35,45],even:0,event:0,everi:[2,3,4,13,26],exampl:[0,3,4,5,7,17,44],except:[0,3,24],exclud:[0,3],exclus:0,execut:[0,17,21,36,42,44],executor:1,exercis:0,exist:[2,3,4,13,26,29],exit:[2,3,4],expect:1,expens:5,explain:44,explicit:[2,3,4,13,26],explicitli:[0,3],express:[0,3],extens:[13,33],extern:3,extract:[10,13,21,26],extract_generation_cod:15,extract_valu:29,extraction_method:29,f:[24,29,41],fa:[0,5],failur:0,fals:[2,3,4,6,14,29,35,41],faster:17,fd:33,featur:15,feder:[3,6],fee:0,few:5,fifti:0,figur:7,file:[0,2,4,6,10,13,17,24,26,35,41,44],file_path:[35,38],filenam:14,filter:7,find:15,find_depend:15,find_mapped_column_nam:15,find_nam:[21,42],find_tabl:36,fip:[1,3,6,43],fips2:[6,40],fips3:[6,40],fips5:[3,40],fips_dict:3,first:[3,5],fit:0,fix:17,fk_column:15,flag:[15,20,29],flat:1,flush:33,flux:1,fn:17,focus:1,follow:[0,1,3,5],fopen:[24,29],forc:[2,3,4,13,26],foreign:3,forest:3,form:[0,3],format:[1,4,7,13,26],fqn:[15,33,36],frame:43,framework:30,free:0,fro:3,from:[0,1,3,5,6,10,13,17,18,21,26,30,35,41,43,44],fst:[1,2,3,4,13,26,35,41],fulfil:1,fulli:41,futur:[1,17],g:[2,3,4,7,13,26,35],gener:[0,1,4,7,10,13,15,36,41,44],generate_from:36,generate_order_bi:36,generate_select:36,generate_wher:36,get:15,get_act:30,get_autocommit:23,get_column:[15,24],get_column_typ:15,get_connect:13,get_cumulative_tim:23,get_database_typ:14,get_entri:29,get_fil:13,get_hostname_as_localhost:32,get_index_ddl:[15,29],get_indexing_progress:30,get_path:41,get_resourc:37,get_resource_dir:37,get_select_from:15,get_thread_tim:23,get_tim:23,get_timestamp:23,gi:1,git:5,github:5,give:[0,4,17],given:[1,4,5,6,7,13,17,26,35,41],goodwil:0,gov:[3,43],govern:[0,3],grant:0,gridmet:3,grossli:0,group:[7,18],guess_str:24,guess_typ:[24,29],gz:[1,2,3,4,13,26],gzip:[2,3,4,13,26],h:[2,3,4],ha:[0,3,7,15],handl:[1,3,13,26,44],handle_csv:24,handle_json:24,handle_sa:24,handler:1,happen:5,hard:3,hard_link:3,harmless:0,harvard:[0,5],has_been_ingest:13,has_column_spec:15,has_hard_linked_children:15,has_head:41,hash:3,have:[0,2,3,4,5,6,13,26,35],hdf5:[1,7],header:3,help:[2,3,4],helper:6,henc:5,here:[1,3,5],herebi:0,herein:0,hold:[0,1],home:45,host:[1,5,14],host_nam:14,hous:6,how:[3,7,23,44],howev:[0,1,3],html:[1,17,43],http:[0,3,5,17,29,43],hud:[6,43],hud_zip2fip:[6,43],hudus:43,huge:[1,17],hundr:5,i:[0,3,5,6],identifi:15,ignor:3,ii:0,iii:0,iin:7,implement:[3,7,13,17,26,35],impli:0,import_data_from_fil:13,import_fil:23,import_t:33,improv:0,inabl:0,incident:0,includ:[0,1,3,4,7,29,35],include_in_index:29,inclus:0,incom:[3,4,35],incomplet:3,inconsist:3,inconsistenttyp:24,incorpor:0,increment:[2,3,4,13,26],incur:0,indemn:0,indemnifi:0,index:[1,13,21,29,30,44],index_column:3,index_method:29,indexbuild:21,indexerconfig:21,indic:[0,1,5,7,13,21],indirect:0,individu:0,infer:[1,6,13,24,26],info:38,inform:[0,1,3,6,10,13,21,26],infrastructur:1,infring:0,ingest:[2,4,6,13,17,26,35,44],ini:[1,2,4,5,14],init:15,initarg:17,initi:17,input:[3,13,26],input_sourc:29,insert:[1,3],insid:3,instal:[39,44],instanc:[1,3,5,10,13,17,21,26],instanti:4,institut:0,instruct:3,integr:3,intend:[1,13,26],intens:1,intention:0,interfac:[0,1,13],interv:[2,3,4,13,26],introduct:[13,44],introspect:[1,13,24,26,35,44],invalid:44,irrevoc:0,is_arrai:15,is_column_wildcard:15,is_gener:15,is_parallel:13,is_relative_to:35,is_zip_to_fips_exact:6,iso:29,issu:0,its:[0,1,3,17],itself:3,januari:0,json:[1,4,13,26,35,41],jsonlin:1,just:[1,4,6,41],kei:[3,15],kind:[0,3],knowledg:[1,3,15],kwarg:[17,23],lambda:41,languag:[0,1,5],laptop:5,last:41,later:1,latter:1,law:0,lawsuit:0,lead:17,least:0,leav:3,legal:0,less:5,level:[1,4,35],liabil:0,liabl:0,lib:30,librari:[17,30],licens:0,licensor:0,like:[1,3,4,5,35],limit:[0,2,3,4,13,23,26],line:[1,2,3,13,24,26,29,35,44],link:[0,1,5,13,44],linkag:3,list:[0,3,7,13,15,23,24,29,30,36,39,40,41],list_column:15,list_identifi:15,list_of_t:15,list_source_column:15,litig:0,load:[1,2,3,6,10,13,26,35,44],load_csv:24,load_fst:24,load_json:24,load_rang:[24,29],load_sa:24,loader:[3,4,13,21,26,30,35,40,42,44],loader_config:[13,35],loaderconfig:[4,13,26,35],local:[3,5],localhost:[1,5],locat:[1,45],log:[2,3,4,13,26],log_act:42,log_progress:[23,29],log_step:23,lookup:6,loss:0,m2q:43,m:[2,3,4,5],made:0,mai:0,mail:0,main:[1,3],mainten:1,major:1,make:0,make_column:29,make_fips_column:29,make_int_column:29,make_iso_column:29,malfunct:0,manag:0,mani:3,manipul:[1,4,10,13,15],map:[1,43,44],mark:0,match:[3,4,15,35],materi:[1,3,6,13],max_queue_s:17,max_val:24,max_work:17,maxdata_:[2,3,4,13,26],maximum:17,mbouzini:5,mean:[0,3],mechan:0,media:0,medicaid:3,medium:0,meet:0,memeb:[10,13,21,26],memori:[1,17],merchant:0,mere:0,messag:[2,3,4],meta:40,metadata:14,metadata_fil:29,method:[1,13,26,29],might:5,million:5,mimic:5,mimicii:5,min:18,minimum:3,minut:5,miss:6,model2:3,model:[8,20,25,44],modif:[0,4,10,13],modifi:0,modul:[3,6,7,15,44],monitor:[1,21],month:[7,43],more:[0,1,4,5],most:[1,2,3,4,5,13,26],move:1,msg_len:30,much:17,multi:[13,44],multi_column:3,multipl:3,must:[0,1,3,7,10,13,21,26,45],my:5,my_domain:3,n:[17,24,29],name2path:37,name:[0,2,3,4,7,10,12,13,15,17,21,23,24,26,29,35,37,41],nation:[3,6],nativ:1,nber:[3,6],necessarili:[0,7],need:5,need_index:15,neglig:0,nest:[4,35],net:1,new_domain:35,next:5,node:[15,41],nomenclatur:[13,44],non:0,none:[2,4,8,13,14,15,17,20,21,23,24,25,26,29,30,33,35,40,41,42],normal:[0,1,3],note:5,noth:[0,35],notic:0,notwithstand:0,now:[1,30],nra:3,nrc:3,nrcs143:3,nri:3,nsaph2:[2,4,5],nsaph:[4,8,13,20,21,23,25,26,30,35,40,42],number:[2,3,4,13,17,26],numer:3,obj_typ:15,object:[0,4,10,13,21,26,40],oblig:0,obsolet:1,obtain:[0,7],occupi:3,offer:0,offic:6,one:[0,1,3,10,13,21,26],onli:[0,3,44],oom:[1,17],open:41,open_csv:41,open_fst:41,open_fwf:41,open_json:41,open_sas7bdat:41,opt:45,optim:44,option:[2,3,8,10,13,15,17,20,21,24,25,26,29,30,35,40,42,44],order:18,org:[0,3,17],organ:1,origin:[0,3],os:[4,35],other:[0,1,3,35],other_column:15,otherwis:[0,6],our:[7,17],out:[0,1,3,7,17],output:[4,10,13],outstand:0,over:[1,2,3,4,13,26],overrid:[3,13,26],overview:44,own:[0,3],owner:0,ownership:0,p:35,packag:[7,44],page:[2,3,4,13,26,38,44],page_s:23,pai:5,panda:43,parallel:[1,2,4,13,17,26],param:14,paramet:[1,2,3,4,5,10,13,21,26,29,35,41],parent:[3,15],pars:17,parse_fips12:29,parse_wildcard_column_spec:15,part:[0,3,5],parti:0,particular:[0,6],pass:[3,17],password:5,patent:0,path:[2,3,4,10,12,13,24,26,35,41],pathlib:35,pattern:[2,3,4,13,26,35,41],pd:6,percent:0,perform:[0,1,3,4],permiss:0,perpetu:0,pertain:0,pg:1,pgsql:1,pid:30,piec:41,pip:5,pipelin:[1,7],pk:15,pl:1,place:[0,6,7,45],plan:5,platform:[5,13],plpgsql:1,plugin:1,polici:[6,13,44],pollut:5,portal:[3,43],possibl:[0,3,7,13,26],postal:6,postgr:5,postgresql:[1,3,5,13,14,26,42],potenti:[1,7],power:0,precis:24,prefer:0,prefix:17,preliminari:44,prepar:[0,23,36],presenc:1,present:3,prevent:1,primari:3,primary_kei:3,print:[30,40],print_ddl:13,print_stat:21,print_table_ddl:13,probabl:1,procedur:1,process:[1,3,6,17,30],produc:[5,41],product:0,program:5,progress:[1,21],project:[35,44,45],project_load:4,projectload:[4,35],promin:0,prototyp:7,provid:[0,1,3,4,6,13,35],psycopg2:[13,33],pt:15,publicli:0,purepath:35,purpos:0,push:23,put:[1,3],py:[1,3,5,30],python3:[5,30],python:[2,3,4,15,17,30,44],qualifi:[15,41],quarter:43,queri:[1,44],queue:[1,17],quot:[3,33,41],quote_al:3,quote_minim:3,quote_non:3,quote_nonnumer:3,r:[1,6],rais:3,rang:3,rather:3,rc:[0,5],reach:17,read:[1,3,5,17,40],read_batch:23,read_config:14,readabl:0,reader:[23,24,41],readm:1,reason:0,receiv:0,recipi:0,reconcil:24,record:[2,4,5,13,23,26,44],recreat:[2,3,4,13,26],recurs:[2,3,4,13,26],redistribut:0,reduce_t:36,refer:3,referenc:3,regard:0,regex:41,registri:[2,4,10,13],rel:[4,35],relat:3,relationship:3,remain:0,remov:17,replac:[3,4,33,35],repositori:1,repres:[0,3,17],reproduc:0,reproduct:0,request:[36,44],requir:[0,1,3,7,15],research:[3,6],reset:[2,3,4,13,26],reset_tim:23,residence_counti:3,resolv:1,resolve_host:14,resourc:44,resource1:1,resource2:1,respons:[0,1,3,13],restrict:7,result:[0,1,3,36],result_set:33,resultsetdeprec:14,retain:0,retriev:[4,7],returns_map:41,reuqest:7,reusabl:1,revis:0,right:0,risk:0,role:3,rollback:13,root:[3,15],root_table_nam:23,row:[23,24,29,33,41],royalti:0,run:[1,5,7,10,13,21,30,35,42,44],runtim:1,s:[0,2,3,4,13,15,24,26,29],sa:[4,35],same:[3,6],sampl:[1,5],sas2db_typ:24,sas7bdat:[24,41],save:[1,29,43],save_registri:35,scale:24,scan:5,schedul:[17,45],schema:[1,4,6,13,21,26,35,41,44],search:[7,44],second:5,section:[0,1,2,3,4,7,8,10,13,14,20,25],secur:6,see:[0,1,4,5,15],select:[3,18],sell:0,sent:0,separ:[0,3,4,13,26,35],sequenti:3,seri:3,servic:[0,6],set:[1,3,4,7,13,26,35,36],set_sloppi:15,set_tabl:13,set_year:40,setup:44,sever:3,shall:0,share:0,should:[1,3,5,7],show:[2,3,4,5,33],signific:17,silent:14,similar:3,simplemap:29,simul:38,singl:[1,2,3,4,13,26],site:43,size:[2,3,4,13,14,26],skip:[2,3,4,13,15,26],sloppi:[4,13,26],social:6,softwar:[0,7,44],sole:0,some:[1,7,17],sourc:[0,5,7,8,10,12,13,14,15,17,20,21,23,24,25,26,29,30,32,33,35,36,37,38,39,40,41,42,43,44],spec:15,special:[0,3],specif:[0,1,3,4,7],specifi:[2,3,4,7,10,13,21,26,45],spell:3,spillover_t:15,split:41,sql:[1,5,15,21,23,29,42,44],sqlpars:15,src:[1,3],ssa2:40,ssa2fip:6,ssa3:40,ssa5:40,ssa:[3,6],ssafil:40,ssh:[1,5],ssh_user:5,stamp_tim:23,standard:[3,6],start:[10,13,21,26,45],state:[0,1,6,7,29,40,44],state_id:18,statement:[0,5],statist:30,stop:17,stoppag:0,storag:3,store:[1,3,5,40],str:[8,12,13,15,20,21,23,24,25,29,30,33,35,36,37,38,39,40,41],strptime:3,structur:[3,4,35,41,44],sub:7,subclass:[10,13,21,26],subdirectori:[4,35],subject:0,sublicens:0,submiss:0,submit:[0,17],subsequ:0,suggest:5,supersed:0,superset:1,support:[0,1,21],sysconfig:45,system:[0,36,44],systemctl:45,t0:29,t1:29,t:[2,3,4,36],tabl:[1,2,4,7,8,10,13,15,20,21,23,25,26,29,33,35,36,41,43],table2:15,table_fqn:15,tabular:3,take:5,taken:[3,6],tar:[2,3,4,13,26],target:[3,15,29],task:[1,17],technic:3,teh:[3,6,41],term:0,termin:0,territori:44,test:24,test_connect:14,text:[0,10,13,17,21,26],tgz:[2,3,4,13,26],than:[3,17],thei:[1,2,3,4,13,26],them:[1,3,5,6,17],theoret:3,theori:0,therefor:1,thereof:0,thi:[0,1,2,3,4,5,6,7,13,17,21,24,26,35,42],thing:3,third:0,those:0,thread:[2,3,4,13,17,26],thread_initi:17,thread_name_prefix:17,threadpoolexecutor:[1,17],three:3,through:0,thu:[1,3],timeout:17,timer:23,titl:0,to_dir:29,tool:[4,13,26,35,44],toolkit:1,top:1,tort:0,track:0,trade:0,trademark:0,transfer:[0,1],transform:0,translat:0,transpar:1,transpos:44,treelik:3,tunnel:[1,5],tupl:[13,15,17,41],tutori:5,two:[1,3,6],type:[0,2,3,4,6,13,24,26,29,36],type_from_metadata:29,u:[2,3,4,5],unambigu:6,under:[0,1],underscor:[4,35],understand:5,unfortun:5,uniform:1,union:0,unit:6,univers:[0,1,3],unless:[0,1,3],unquot:[24,29],until:17,updat:[3,4,5,13,26],upon:3,urban:6,url:[3,40],url_pattern:43,us:[0,1,2,4,7,10,13,17,21,26,29,44],us_iso:18,usag:[3,44],usda:3,used_t:36,user:[5,36,44],user_request:36,usernam:5,usp:[6,43],usps_crosswalk:43,usual:[4,17,35,41],util:[5,6,23,30,40,43,44],v2:24,v:24,valid:[6,13,26],validate_zip_fip:6,valu:[3,7,10,13,21,26,40],varchar:6,variabl:[3,7,36],variou:[1,15],venv:5,verbal:0,verbos:[4,10,13],veri:[3,7],version:[0,1,30],via:4,view:[1,3,6,13,26],view_column_join:15,view_column_spec:15,virtual:[1,3,13,44],wa:[0,1],wai:[1,7],wait:17,wait_for_complet:17,want:5,warranti:0,we:[1,3,5,6,7],webserv:45,week:5,were:3,what:[3,5],wheel:1,when:[1,3,5,17],where:0,wherev:0,whether:0,which:[0,3],whole:[0,1,13,26],whom:0,whose:3,wil:7,within:[0,1],without:[0,4,17],word:1,work:0,worker:17,workflow:1,workspac:1,worldwid:0,would:3,wp:3,write:[0,2,3,4,5,13,26],written:[0,3],www:[0,3,43],x:33,xlsx:43,y:[3,40],yaml:[2,3,4,10,13,26,41,44],ye:3,year:[6,7,40,43],yml:[1,3],you:[0,5],your:[0,5],zip2fip:6,zip2fipscrosswalk:43,zip:[1,2,3,4,6,13,26,43],zip_county_:43,zip_to_fip:6,zipcod:3},titles:["&lt;no title&gt;","NSAPH Data Platform","NSAPH Data Loader","Data Modelling for NSAPH Data Platform","Project (Directory) Loading Utility","How to query the database","Mapping between different territorial codes","Preliminary Considerations for Handling User Requests","The adi Module","The analyze Module","The common Module","The create Module","The cwl_collect_outputs Module","The data_loader Module","The db Module","The Domain Class","The ds Module","The executors Module","The fips Module","The hdf5_export Module","The index Module","The index_builder Module","The ingest Module","The inserter Module","The introspector Module","The link_gis Module","The loader_config Module","The log_viewer Module","The md Module","The model Module","The monitor Module","The nc_loader Module","The net Module","The pg_json_dump Module","The pg_keywords Module","The project_loader Module","The query Module","The resources Module","The sas_explorer Module","The shapes Module","The ssa2fips Module","The utils Module","The vacuum Module","The zip2fips Module","NSAPH Core Data Platform","Airflow Configuration Files for NSAPH Data Server"],titleterms:{"class":15,"function":6,The:[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],adi:8,airflow:45,analyz:9,api:[4,13],between:6,code:6,column:3,command:4,common:10,comput:3,configur:[4,13,45],connect:[1,5],consider:7,content:44,core:44,creat:[5,11],cwl_collect_output:12,data:[1,2,3,44,45],data_load:13,databas:[1,3,5],db:14,ddl:3,definit:5,describ:1,differ:6,directori:4,domain:[3,15],dry:4,ds:16,environ:5,exampl:1,execut:5,executor:17,explain:5,file:[1,3,5,45],fip:18,from:4,gener:3,handl:7,hdf5_export:19,how:5,implement:1,incomplet:1,index:[3,20],index_build:21,indic:[3,44],ingest:[3,22],insert:23,instal:5,introduct:[3,7],introspect:4,introspector:24,invalid:3,line:4,link:3,link_gi:25,load:4,loader:[1,2],loader_config:26,log_view:27,map:6,md:28,miscellan:1,model:[1,3,13,29],modul:[1,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],monitor:30,multi:3,nc_loader:31,net:32,nomenclatur:3,nsaph:[1,2,3,5,44,45],onli:4,optim:5,option:4,overview:[1,4],packag:[1,5],pg_json_dump:33,pg_keyword:34,platform:[1,3,44],polici:3,preliminari:7,project:[1,4],project_load:35,python:[1,5,6],queri:[5,36],record:3,request:[1,7],resourc:[1,37],run:4,sas_explor:38,schema:3,server:45,setup:5,shape:39,softwar:1,sourc:[1,3,6],specif:13,sql:6,ssa2fip:40,state:3,structur:[1,7],subpackag:1,system:6,tabl:[3,6,44],territori:6,tool:1,transpos:3,us:[3,5],usag:[2,4,13],user:[1,7],util:[1,4,41],vacuum:42,virtual:5,wrapper:1,yaml:1,zip2fip:43}})