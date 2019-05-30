$("body").on('click','[data-stopPropagation]',function (e) {
    e.stopPropagation();
});
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
    var use_gold_sample1 = $('#customRadio1').is(":checked");
    var use_gold_sample2 = $('#customRadio2').is(":checked");
    var use_gold_sample3 = $('#customRadio3').is(":checked");
    var education = $('#education').is(":checked");
    var science = $('#science').is(":checked");
    var debug_mode = $('#debug_mode').is(":checked");
    var system1_story = "";
    var system2_story = "";
    var system3_story = "";
//    if (!debug_mode) {
//	$("#translate-button").prop("disabled", true);
//    }
	$("#status").html(use_gold_sample1);
	if (use_gold_sample1){
    id = Math.round(Math.random()*10000) + 1;
    var input = 'A Backyard Mayan Temple May Be Doomed.<br><p></p>WHEN <font color=#ff7433>Barbara Winston</font> had a stone replica of a Mayan temple built in her backyard , it was meant to give <font color=#ff7433>her</font> a sense of peace. <br><p></p>Instead, it started a war. <br><p></p><b>In August 2005 , <font color=#ff7433>Mrs. Winston</font> , who lives on a 13-acre estate with her husband , Bruce , had a stonecutter erect a $25,000 replica of Guatemal \'s Temple of the Great Jaguar at the rear of their property.</b><br><p></p>While the temple\'s scale is one-seventeenth of the original, it is by no means small, with granite blocks forming three staircases rising nine feet to a rectangular platform.<br><p></p>It is also 24 feet from the horse barn and riding ring of the Winstons\' neighbor , <font color=Maroon>Diane Lewis</font> , who complained to the Town of Bedford that the temple detracted from the enjoyment of her property. <br><p></p><b>In September , <font color=green>the Zoning Board of Appeals</font> rejected the <font color=#ff7433>Winstons\'</font> request for a variance and said that the temple was a structure requiring permits and a 50-foot setback from adjacent property. </b><br><p></p>It questioned why the <font color=#ff7433>Winstons</font>, with 13 acres to choose from, put the temple so close to  <font color=Maroon>Ms. Lewis \'s</font> property.<br><p></p>The ruling left the Winstons with three choices: tear down the temple, move it, or fight. <br><p></p>In October, they sued the board in state court .<br><p></p>I swear to you, I will chain myself to it, <font color=#ff7433>Mrs. Winston</font> said recently.';
    var sentence = '<font color=#0F95BD>In August 2005 , Mrs. Winston , who lives on a 13-acre estate with her husband , Bruce , had a stonecutter erect a $25,000 replica of Guatemal \'s Temple of the Great Jaguar at the rear of their property.</font><br><p></p><font color=#0F95BD>In September , the Zoning Board of Appeals rejected the Winstons\' request for a variance </font> <font color=#C302FC>and said that the temple was a structure requiring permits and a 50-foot setback from adjacent property.</font>';
    var summary = '<font color=#0F95BD>Bruce and Barbara Winston file suit against Zoning Board in Bedford, NY, after board rejects their request for variance for stone replica of Mayan temple that couple had built on their 13-acre estate.</font><br><p></p><font color=#C302FC>board, after complaint from neighbor Diane Lewis, says temple is structure that requires permits and 50-foot setback from adjacent property.</font>';
    $("#processed_input").html(input);
	$("#selected_sentences").html(sentence);
	$("#summary").html(summary);
	$("#status").html('Done');
	} else if (use_gold_sample2){
	    var input = "Chemical Plant Safety. <br><p></p>" +
	    	"The <font color=green>federal government</font> has done almost nothing since Sept. 11, 2001, to secure chemical plants, perhaps the nation\'s greatest terrorist vulnerability. <br><p></p>"+	
					"<b>But now <font color=green>it</font> may be about to do something that will actually make things worse: wipe out safety rules at the state level. </b><br><p></p>"+
					"If <font color=#ff7433>Congress</font> will not protect Americans, it should at least ensure that states can do it. <br><p></p>"+
					"<b>A terrorist attack on a chemical plant could put hundreds of thousands of people at risk. </b><br><p></p>"+
					"But members of <font color=#ff7433>Congress</font> have been more worried about currying favor with the chemical industry, a major campaign donor, than with safeguarding their constituents from this serious threat. <br><p></p>"+
					"<b>Last year, <font color=#ff7433>Congress</font> passed a chemical plant security law that opened the door for the Bush administration to issue regulations that ''pre-empt,'' or nullify, state and local chemical plant rules, like the ones New Jersey has adopted. </b><br><p></p>"+
					"<font color=#ff7433>Leaders of the new Democratic Congress</font>, who have promised to take a tough line on homeland security, should push through a strong chemical plant security bill. <br><p></p>"+
					"<b>But until <font color=#ff7433>they</font> do, <font color=#ff7433>they</font> should see that language gets added to this week\'s budget bill expressly stating that federal law does not pre-empt state chemical plant security laws. </b><br><p></p>"+
					"The <font color=Maroon>chemical industry\'s</font> staunchest supporters are leading the charge to take away the states\' power. <br><p></p>"+
					"Disappointingly, Susan Collins, Republican of Maine, and Norm Coleman, Republican of Minnesota, who have more moderate reputations, have joined them, signing a letter urging the Senate not to pass a law now protecting the states\' authority. <br><p></p>"+
					"The <font color=Maroon>industry\'s</font> supporters say Congress should wait until the Bush administration issues regulations next month, and see what they look like. But the administration has already made clear that it believes in pre-empting state authority to regulate chemical plants. <br><p></p>"+
					"It would be a mistake to let regulations be adopted that put people in danger. <font color=#ff7433>Congress</font> has the power to block them right now. <br><p></p>"+
					"Editorial";
		var sentence = '<font color=#0F95BD>But now it may be about to do something that will actually make things worse: wipe out safety rules at the state level. </font><br><p></p>' +
					'<font color=#0F95BD>A terrorist attack on a chemical plant could put hundreds of thousands of people at risk. </font><br><p></p>' +
					'<font color=#0F95BD>Last year, Congress passed a chemical plant security law that opened the door for the Bush administration to issue regulations that pre-empt, or nullify, state and local chemical plant rules, like the ones New Jersey has adopted. </font><br><p></p>' +
					'<font color=#C302FC>But until they do, they should see that language gets added to this week\'s budget bill expressly stating that federal law does not pre-empt state chemical plant security laws. </font>';
		var summary = '<font color=#C302FC>Editorial says leaders of new Democratic Congress should see that language is added to budget bill expressly stating that federal law does not pre-empt state chemical plant security laws; </font><br><p></p>'+
'<font color=#0F95BD>says law passed last year by Republicans, at behest of chemical industry, would wipe out more stringent safety rules at state level, despite fact that terrorist attack on chemical plant could put hundreds of thousands of people at risk <br><p></p>';
    $("#processed_input").html(input);
	$("#selected_sentences").html(sentence);
	$("#summary").html(summary);
	$("#status").html('Done');
	} else {
	var input = 'What Should a Textbook Cost? Do the Math. <br><p></p>' +
			'To the Editor: <br><p></p>' +
			'<b>\'Help, by the Book\' (editorial, May 1) applauds <font color=green>the State of Washington</font> for taking steps to hold down textbook costs and Rice University for making <font color=#ff7433>materials</font>, written by a \'consortium of writers,\' available for free online use. </b><br><p></p>' +
			'As a professor and textbook author, I wonder what kind of incentive you propose to offer the people who write these <font color=#ff7433>materials</font>. Preparing a textbook entails extensive research and writing. Weekends and evenings disappear, as a writer tries to perform the day job of teaching and conducting research, while managing to write a quality product. <br><p></p>' +
			'Most of us who write textbooks are pitching them to a fairly small audience. If every student in my area of expertise bought my textbook, I\'d sell about 5,000 copies. <br><p></p>' +
			'My royalty rate varies between 6 and 13 percent. If I did the math, which I try to avoid doing while writing to stave off discouragement. <br><p></p>' +
			'<b>I\'d realize that my hourly rate is probably four bucks an hour. </b><br><p></p>' +
			'If you want students to learn from high-quality textbooks, someone has to pay the people who write them. <br><p></p>' +
			'Nancy Murray  St. Louis, May 1, 2007 <br><p></p>' +
			'The writer is a research professor of otolaryngology at Washington University School of Medicine. <br><p></p>' +
			'To the Editor: <br><p></p>' +
			'<b>With modern technology, there is no excuse, beyond greed, for the outrageous cost of textbooks. This is not even the price of innovation: most basic textbooks are not much more than retreads of previous texts. </b><br><p></p>' +
			'The solution lies in bypassing the publishers and publishing on the Web. Moreover, innovation wouldn\'t be squelched by editors driven by market surveys. <br><p></p>' +
			'Some argue that publishers are needed to control the quality of the content, but my experience shows that publication by a major textbook company is no guarantee that a book is well written, or even correct. <br><p></p>' +
			'Dan Sloughter  Greenville, S.C., May 1, 2007 <br><p></p>' +
			'The writer is a professor of mathematics at Furman University. <br><p></p>' +
			'To the Editor: <br><p></p>' +
			'<b>You draw attention to the high cost of college texts. Of equal or greater concern is the high cost of elementary and secondary school textbooks and <font color=#ff7433>materials</font> -- costs borne by taxpayers. </b><br><p></p>' +
			'Algebra books can start at about $65; calculus books can cost $100 or more. Teachers\' editions and support <font color=#ff7433>materials</font> add to the expense. <br><p></p>' +
			'<font color=green>The state</font> provides some money for textbooks, but only enough to allow a school to get new books after many years of use. <br><p></p>' +
			'Another factor is curriculum revision. When that occurs, all of the texts that schools have bought, hoarded and protected will be outdated and new <font color=#ff7433>materials</font> will be needed -- a publisher\'s dream and recycler\'s nightmare. Creative solutions are indeed needed. <br><p></p>' +
			'Joan Budish  New York, May 1, 2007 <br><p></p>';
	var sentence = '<font color=#C302FC> \'Help, by the Book\' (editorial, May 1) applauds the State of Washington for taking steps to hold down textbook costs and Rice University for making materials, written by a \'consortium of writers,\' available for free online use. </font><br><p></p>' +
'<font color=#C302FC> I\'d realize that my hourly rate is probably four bucks an hour. </font><br><p></p>' +
'<font color=#0F95BD>With modern technology, there is no excuse, beyond greed, for the outrageous cost of textbooks. This is not even the price of innovation: most basic textbooks are not much more than retreads of previous texts. </font><br><p></p>' +
'<font color=#9AA400>You draw attention to the high cost of college texts. Of equal or greater concern is the high cost of elementary and secondary school textbooks and materials -- costs borne by taxpayers. </font><br><p></p>';
	var summary = '<font color=#C302FC> Three letters respond to May 1 editorial applauding State of Washington for taking steps to hold down textbook costs; Washington University School of Medicine Prof Nancy Murray holds that her hourly rate as textbook author is probably four bucks an hour. </font><br><p></p>' +
'<font color=#0F95BD>Furman University Prof Dan Sloughter says there is no excuse, beyond greed, for outrageous cost of textbooks. </font><br><p></p>' + 
'<font color=#9AA400>Joan Budish says that of equal or greater concern is high cost of elementary and secondary school textbooks and materials </font>';
	$("#processed_input").html(input);
	$("#selected_sentences").html(sentence);
	$("#summary").html(summary);
	$("#status").html('Done');
}

});
