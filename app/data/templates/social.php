<?php
if($item['brand']!=="baseplay." && $item['type'] == "named"){
  ?>
    <mj-section padding="0">
      <mj-column vertical-align="middle" width="80%">
        <mj-text align="center" color="white">
          <p style="width:100%; text-align:right; padding-right:0;">*|FNAME|*, check your messages</p>
        </mj-text>
        </mj-column>
        <mj-column vertical-align="middle" width="20%">
          <mj-image src="message-icon.png" width="46px" margin="0 5px 0 0" padding="0" href="https://<?=$item['brand_url']?>/socialsharing/messages?utm_source=newsletter&amp;utm_campaign=<?=$_POST['date']?>"/>
          </mj-column>
      </mj-section>
<?php
}
else if($item['brand']!=="baseplay." && $item['type'] == "generic"){
?>
<mj-section padding="0">
<mj-column vertical-align="middle" width="80%">
<mj-text align="center" color="white">
<p style="width:100%; text-align:right; padding-right:0;">New messages</p>
</mj-text>
</mj-column>
<mj-column vertical-align="middle" width="20%">
<mj-image src="message-icon.png" width="46px" margin="0 5px 0 0" padding="0" href="https://<?=$item['brand_url']?>/socialsharing/messages?utm_source=newsletter&amp;utm_campaign=<?=$_POST['date']?>"/>
</mj-column>
</mj-section>
<?php
}
else{}
?>
