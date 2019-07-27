<mj-raw>
  <hr style="width:600px; margin:30px auto; color: #EAEAEA;">
</mj-raw>
<mj-section>
  <mj-column>
    <mj-image src="logo.png" width="<?=$item['width_logo']?>px" height="<?=$item['height_logo']?>px" padding="0" href="https://<?= $item['brand_url']?>/login?utm_source=newsletter&amp;utm_campaign=<?=$_POST['date']?>"/>
  </mj-column>
</mj-section>
<mj-section>
  <mj-column>
      <mj-text>
        <p style="margin:0;font-size:10px;color:#808080;text-align:center;font-family:Helvetica, sans-serif;">If you'd no longer like to receive emails from <b><?= $item['brand']?></b>, please <a href="*|UNSUB|*">click here to unsubscribe</p>
      </mj-text>
  </mj-column>
</mj-section>


</mj-body>
</mjml>
