$('#translate-button').click(function() {
    var btn = $(this);
    // btn.button('loading');
    $("#status").html("Generating...");
    $("#system_1").html("");
    $("#system_2").html("");
    $("#system_3").html("");
    $("#elapsed").html("");

    $("#system_1_ready").html("");
    $("#system_2_ready").html("");
    $("#system_3_ready").html("");

    var topic = $('#input-topic').val();
//     topic = topic.replace(/ /g, "_");
    if (topic == ""){
	topic = "the not so haunted house";
    }
    var kw_temp = $('#kw_temp').val();
    var story_temp = $('#story_temp').val();
    var system_id = "system_2";
    var dedup = $('#dedup').is(":checked");
    var max_len = $('#max_len').val();
    var use_gold_titles = $('#use_gold').is(":checked");
    var use_gold_sample = $('#sample1').is(":checked");
    var education = $('#education').is(":checked");
    var science = $('#science').is(":checked");
    var debug_mode = $('#debug_mode').is(":checked");
    var system1_story = "";
    var system2_story = "";
    var system3_story = "";
//    if (!debug_mode) {
//	$("#translate-button").prop("disabled", true);
//    }

    id = Math.round(Math.random()*10000) + 1;
    var input = 'A Backyard Mayan Temple May Be Doomed.<br><p></p>WHEN <font color=#ff7433>Barbara Winston</font> had a stone replica of a Mayan temple built in her backyard , it was meant to give <font color=#ff7433>her</font> a sense of peace. <br><p></p>Instead, it started a war. <br><p></p><b>In August 2005 , <font color=#ff7433>Mrs. Winston</font> , who lives on a 13-acre estate with her husband , Bruce , had a stonecutter erect a $25,000 replica of Guatemal \'s Temple of the Great Jaguar at the rear of their property.</b><br><p></p>While the temple\'s scale is one-seventeenth of the original, it is by no means small, with granite blocks forming three staircases rising nine feet to a rectangular platform.<br><p></p>It is also 24 feet from the horse barn and riding ring of the Winstons\' neighbor , <font color=Maroon>Diane Lewis</font> , who complained to the Town of Bedford that the temple detracted from the enjoyment of her property. <br><p></p><b>In September , <font color=green>the Zoning Board of Appeals</font> rejected the <font color=#ff7433>Winstons\'</font> request for a variance and said that the temple was a structure requiring permits and a 50-foot setback from adjacent property. </b><br><p></p>It questioned why the <font color=#ff7433>Winstons</font>, with 13 acres to choose from, put the temple so close to  <font color=Maroon>Ms. Lewis \'s</font> property.<br><p></p>The ruling left the Winstons with three choices: tear down the temple, move it, or fight. <br><p></p>In October, they sued the board in state court .<br><p></p>I swear to you, I will chain myself to it, <font color=#ff7433>Mrs. Winston</font> said recently.'
    var sentence = '<font color=#0015aa>In August 2005 , Mrs. Winston , who lives on a 13-acre estate with her husband , Bruce , had a stonecutter erect a $25,000 replica of Guatemal \'s Temple of the Great Jaguar at the rear of their property.</font><br><p></p><font color=#0015aa>In September , the Zoning Board of Appeals rejected the Winstons\' request for a variance </font> <font color=#ae00e1>and said that the temple was a structure requiring permits and a 50-foot setback from adjacent property.</font>'
    var summary = '<font color=#0015aa>Bruce and Barbara Winston file suit against Zoning Board in Bedford, NY, after board rejects their request for variance for stone replica of Mayan temple that couple had built on their 13-acre estate.</font><br><p></p><font color=#ae00e1>board, after complaint from neighbor Diane Lewis, says temple is structure that requires permits and 50-foot setback from adjacent property.</font>'
    $("#processed_input").html(input);
	$("#selected_sentences").html(sentence);
	$("#summary").html(summary);
	$("#status").html("Done");

});
