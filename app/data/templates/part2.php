<?php
if ($_POST['radio']=='triptic'){?>
  <mj-section padding="0">
      <mj-column>
        <mj-image src="1.png" width="535px" href="https://<?= $item['brand_url'].$_POST['url2']?>?utm_source=newsletter&amp;utm_campaign=<?=  $_POST['date']?>"></mj-image>
        <mj-text align="center">
          <?=  $_POST['text2'] ?>
        </mj-text>
        <mj-button background-color="<?= $item['color']?>" color="white" font-weight="bold" href="https://<?= $item['brand_url'].$_POST['url2']?>?utm_source=newsletter&amp;utm_campaign=<?=  $_POST['date']?>">
          <?=  $_POST['cta2'] ?>
        </mj-button>
      </mj-column>
</mj-section>
<?php
  }
  elseif ($_POST['radio']=='lastadded'){?>
    <mj-section padding="0">
      <mj-column>
        <mj-text>
          <h2>Last added</h2>
        </mj-text>
          <mj-image src="latest-added.png" width="535px" href="https://<?= $item['brand_url'].$_POST['url2']?>?utm_source=newsletter&amp;utm_campaign=<?=  $_POST['date']?>"></mj-image>
          <mj-text align="center">
            <?=  $_POST['text2'] ?>
          </mj-text>
          <mj-button background-color="<?= $item['color']?>" color="white" font-weight="bold" href="https://<?= $item['brand_url'].$_POST['url2']?>?utm_source=newsletter&amp;utm_campaign=<?=$_POST['date']?>">
          <?=  $_POST['cta2'] ?>
          </mj-button>

      </mj-column>
    </mj-section>
<?php
  }
  elseif($_POST['radio']=='one'){
?>
<mj-section padding="0">
  <mj-column>
    <mj-image src="2.png" width="357px" href="https://<?= $item['brand_url'].$_POST['url2']?>?utm_source=newsletter&amp;utm_campaign=<?=  $_POST['date']?>"></mj-image>
    <mj-text align="center">
      <?=  $_POST['text2'] ?>
    </mj-text>
    <mj-button background-color="<?= $item['color']?>" color="white" font-weight="bold" href="https://<?= $item['brand_url'].$_POST['url2']?>?utm_source=newsletter&amp;utm_campaign=<?=  $_POST['date']?>">
      <?=  $_POST['cta2'] ?>
    </mj-button>

  </mj-column>
</mj-section>

<?php
}
else{}
 ?>
