<template>
  <div id="Resource">
    <div class='leftreource'>
      <searchresource class='searchresource'/>
      <resourceannounce class='resourceannounce'/>
      <div class='resourceshare'>
        <hotresource class='hotresource'/>
        <newresource class='newresource'/>
      </div>
    </div>
    <div class='rightresource'>
      <resourcestar class='resourcestar'/>
      <contactusaboutresource class='contactusaboutresource'/>
    </div>
  </div>
</template>

<script>
import HotResource from './ResourceModule/HotResource.vue'
import NewResource from './ResourceModule/NewResource.vue'
import ResourceAnnounce from './ResourceModule/ResourceAnnounce.vue'
import ResourceStar from './ResourceModule/ResourceStar.vue'
import SearchResource from './ResourceModule/SearchSource.vue'
import ContactUsAboutResource from './ResourceModule/ContactUsAboutResource.vue'
export default {
  name: 'Resource',
  components: {
    'hotresource': HotResource,
    'newresource': NewResource,
    'resourceannounce': ResourceAnnounce,
    'resourcestar': ResourceStar,
    'searchresource': SearchResource,
    'contactusaboutresource': ContactUsAboutResource
  }
}
</script>

<style>
#Resource {
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 60px;
}
.leftreource{
  height: 100%;
  width: 70%;
  float: left;
}
.rightresource{
  height: 100%;
  width: 30%;
  float: left;
}
.searchresource{
  margin-left: 10px;
  margin-right: 10px;
}
.resourceannounce{
  margin-left: 10px;
  margin-right: 10px;
}
.resourceshare{
  margin-left: 20px;
  margin-right: 10px;
  width: 100%;
  display: block;
}
.hotresource{
  margin-left: 10px;
  margin-right: 10px;
  width: 45%;
  display: inline-block;
  vertical-align: top;
}
.newresource{
  margin-left: 10px;
  margin-right: 10px;
  width: 45%;
  display: inline-block;
}
.resourcestar{
  margin-left: 10px;
  margin-right: 10px;
}
.contactusaboutresource{
  margin-left: 10px;
  margin-right: 10px;
}
</style>
